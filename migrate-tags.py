import os
import re

for filename in os.listdir('blog'):
    if filename[0] == '.': continue
    path = 'blog/' + filename
    with open(path) as fp:
        content = fp.read()
        content = re.sub('^tags: (.+)$', lambda m: f"tags: [{', '.join(m.group(1).split())}]", content, flags=re.MULTILINE)
    with open(path, 'w') as fp:
        fp.write(content)
