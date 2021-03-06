install:
	npm install
start:
	npx babel-node src/index.js
build:
	rm -rf dist
	npm run build
create:
	npm run create
publish:
	npm publish
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage