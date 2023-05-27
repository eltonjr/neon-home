#!/bin/bash

FILE=script/data.js

cat $FILE \
| sed -e 's/"name": "nr"/"name": "nr","color": "mint"/' \
| sed -e 's/"name": "git"/"name": "git","color": "orange"/' \
| sed -e 's/"name": "k"/"name": "k","color": "pink"/' \
| sed -e 's/"name": "doc"/"name": "doc","color": "green"/' \
> script/tmp.js

mv script/tmp.js $FILE