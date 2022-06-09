# Backend Javascript Template (base project)

This is a repository intended to serve as a starting point of a backend API using javascript.

## Features

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
  - [SonarJS plugin](https://github.com/SonarSource/eslint-plugin-sonarjs/)
  - And a few other ES2015+ related rules
- [Jest](https://jestjs.io)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Running the app

```
# install dependencies
npm install

# run in dev mode (using nodemon) on port 3001
npm run dev

# run content on port 3001
npm run start
```

## Testing

### Testing with Jest

```
# run tests
npm run test

# run coverage of tests
npm run test:coverage
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```
