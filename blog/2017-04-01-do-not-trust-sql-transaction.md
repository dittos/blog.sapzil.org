---
layout: post
title: SQL 트랜잭션 - 믿는 도끼에 발등 찍힌다
tags: [database]
---

RDBMS를 쓰는 이유 중 하나는 트랜잭션입니다. 하지만 RDBMS의 트랜잭션을 너무 믿다가는 깜짝 놀랄 일이 벌어질 수도 있습니다.

<figure>
<img src="/public/img/lsm.jpg" alt="국민 여러분 안심하십시오" />
<figcaption>??? : <a href="https://librewiki.net/wiki/%EC%9D%B4%EC%8A%B9%EB%A7%8C">국민 여러분 안심하십시오</a></figcaption>
</figure>

## 문제

다음과 같이 얼핏 보면 무해해 보이는 코드가 있습니다.

```py
# CREATE TABLE account (id integer, money integer, state text);
# INSERT INTO account (id, money, state) VALUES (1, 10, 'poor');

tx = begin()
state = tx.query("SELECT state FROM account WHERE id = 1")
if state == "poor":
    tx.query("UPDATE account SET state = 'rich', money = money * 1000 WHERE id = 1")
tx.commit()
```

이런 코드가 동시에 다음 순서로 실행되면 어떤 일이 벌어질까요?

| 트랜잭션 A | 트랜잭션 B |
| ------------------------- | ---------------------------|
| BEGIN | |
| SELECT state FROM account WHERE id = 1 | |
| | BEGIN |
| | SELECT state FROM account WHERE id = 1 |
| | UPDATE account SET state = 'rich', money = money * 1000 WHERE id = 1 |
| | COMMIT |
| UPDATE account SET state = 'rich', money = money * 1000 WHERE id = 1 | |
| COMMIT | |

money가 10,000,000이 됩니다.

## 왜죠?

SQL 표준에서 isolation level은 READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE 네 가지입니다.
SERIALIZABLE이 가장 높은 격리수준이지만 성능 상의 이유로 [MySQL (InnoDB)은 REPEATABLE READ](https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html), [PostgreSQL은 READ COMMITTED](https://www.postgresql.org/docs/current/static/transaction-iso.html)가 기본값입니다.

이러한 기본 isolation level에서 `UPDATE` 쿼리는 대상 레코드를 다른 트랜잭션이 먼저 업데이트한 뒤 커밋된 경우 업데이트 된 데이터를 보게 됩니다.

> ... a target row might have already been updated (or deleted or locked) by another concurrent transaction by the time it is found. In this case, the would-be updater will wait for the first updating transaction to commit or roll back (if it is still in progress). ... If the first updater commits, the second updater ... **will attempt to apply its operation to the updated version of the row.** [(Postgres 문서)](https://www.postgresql.org/docs/current/static/transaction-iso.html#XACT-READ-COMMITTED)

> The snapshot of the database state applies to SELECT statements within a transaction, not necessarily to DML statements. If you insert or modify some rows and then commit that transaction, a DELETE or UPDATE statement issued from another concurrent REPEATABLE READ transaction could affect those just-committed rows, even though the session could not query them. [(MySQL 문서)](https://dev.mysql.com/doc/refman/5.7/en/innodb-consistent-read.html)

## 해결책

### Isolation level 높이기

MySQL에서는 SERIALIZABLE 밖에 답이 없는데 이 경우에 항상 락이 걸리므로 현실적으로 사용하기 힘듭니다.

Postgres는 REPEATABLE READ로 올리면 이러한 문제가 없습니다. 대신 트랜잭션 A가 `UPDATE`를 시도할 때 트랜잭션이 중단되어 버리므로 애플리케이션 단에서 전체 트랜잭션을 처음부터 재시도해야 합니다.

> a target row might have already been updated (or deleted or locked) by another concurrent transaction by the time it is found. In this case, the repeatable read transaction will wait for the first updating transaction to commit or roll back (if it is still in progress). ... if the first updater commits (and actually updated or deleted the row, not just locked it) then the repeatable read transaction **will be rolled back** with the message `ERROR:  could not serialize access due to concurrent update` because a repeatable read transaction cannot modify or lock rows changed by other transactions after the repeatable read transaction began. [(Postgres 문서)](https://www.postgresql.org/docs/current/static/transaction-iso.html#XACT-REPEATABLE-READ)

### `SELECT FOR UPDATE` 사용

업데이트 할 레코드를 가져올 때 `SELECT` 쿼리 대신 `SELECT FOR UPDATE` 문을 사용하면 락이 걸립니다.
그러면 트랜잭션 B가 읽기를 시도할 때 트랜잭션 A가 커밋 (또는 롤백)되기까지 기다리게 되므로 문제가 발생하지 않습니다.

### `UPDATE` 한번에 모든 것을 처리

`SELECT`를 하지 말고 `UPDATE account SET state = 'rich', money = money * 1000 WHERE id = 1 AND state = 'poor'`와 같이 처리할 수도 있습니다.
이렇게 하면 로직이 애플리케이션 코드에서 SQL로 옮겨가기는 하지만 마지막으로 커밋된 데이터를 기준으로 작동해서 문제가 발생하지 않습니다.

### 낙관적(optimistic) 락

테이블에 버전 필드를 추가해서 `SELECT`할 때 가져옵니다. 그리고 `UPDATE`할 때 WHERE 절에 기존 버전을 추가하고 +1된 버전으로 업데이트를 시도합니다. 업데이트 된 레코드 수를 검사해서 0개라면 다른 트랜잭션에서 버전이 변경된 것을 알 수 있습니다. 이렇게 **충돌**을 감지한 경우 애플리케이션 단에서 전체 트랜잭션을 처음부터 재시도해야 할 수도 있습니다.

[ORM에서 낙관적 락 기능을 제공하는 경우도 있습니다.](https://docs.jboss.org/hibernate/orm/4.0/devguide/en-US/html/ch05.html)

## 결론

데이터베이스에서 데이터를 읽은 다음 애플리케이션에서 처리 후 다시 쓰는 경우에 주의가 필요합니다.
