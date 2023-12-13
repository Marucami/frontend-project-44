install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test-coverage:
	npm test -- --coverage --coverageProvider=v8