# styles
Style Library for the Rockefeller Archive Center.

## Getting started
Install dependencies using `yarn install`.

This project uses [Dart Sass](https://sass-lang.com/dart-sass). Compile SCSS stylesheets to CSS using:
```
yarn compile
```

## Tests
Unit tests have been added to ensure that mixin output and Sass functions are correct. To run tests:
```
yarn test
```

Unit tests are set up to run in the CI pipeline. The build will fail if the tests do not pass.

## Linting
This project uses [stylelint](https://stylelint.io/), which can be configured using the `.stylelintrc.json` file located in the root of this repository. To run linting:
```
yarn lint
```

To autofix any reported issues (manual cleanup may still be required):
```
yarn lint-fix
```

Linting is set up to run in the CI pipeline. The build will fail if linting does not pass.

## License
This code is released under an [MIT License](LICENSE).
