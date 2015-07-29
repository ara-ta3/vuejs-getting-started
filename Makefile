bower=./node_modules/bower/bin/bower
npm=$(shell which npm)
host=localhost
port=8080

install:
	$(npm) install
	$(bower) install

server:
	php -S $(host):$(port) -t public_html
