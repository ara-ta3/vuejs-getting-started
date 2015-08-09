bower=./node_modules/bower/bin/bower
npm=$(shell which npm)
host=localhost
port=8080
WEBPACK=./node_modules/webpack/bin/webpack.js
MOCHA=./node_modules/mocha/bin/mocha
UGLIFY=./node_modules/uglify-js/bin/uglifyjs

.PHONY:test

install:
	$(npm) install
	$(bower) install

server:
	php -S $(host):$(port) -t public_html

webpack:
	@$(WEBPACK)
	make uglify target-js="gacha-app.js"

test:
	@$(MOCHA) test/

uglify:
	@$(UGLIFY) -c -o public_html/js/$(target-js) dist/$(target-js)
