#!/bin/bash
echo "MYSQL_PORT=$MYSQL_PORT"

#sed -i 's/\$\#{MYSQL_PORT}/'"$MYSQL_PORT"'/g' /myproject/configs/server.json

#echo "server.json="
#cat /myproject/configs/server.json

node test.js
