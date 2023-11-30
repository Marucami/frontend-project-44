install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8