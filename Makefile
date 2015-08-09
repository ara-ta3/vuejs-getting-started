bower=./node_modules/bower/bin/bower
npm=$(shell which npm)
host=localhost
port=8080
WEBPACK=./node_modules/webpack/bin/webpack.js

install:
	$(npm) install
	$(bower) install

server:
	php -S $(host):$(port) -t public_html

webpack:
	@$(WEBPACK)
