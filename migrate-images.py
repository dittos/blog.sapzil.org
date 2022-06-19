import os
import re

for filename in os.listdir('blog'):
    if filename[0] == '.': continue
    path = 'blog/' + filename
    with open(path) as fp:
        content = fp.read()
        content = re.sub('<img (.+?[^/])>', '<img \\1 />', content)
    with open(path, 'w') as fp:
        fp.write(content)
