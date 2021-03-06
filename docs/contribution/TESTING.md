# Testing

> For component library to be stable, it must be testable and tested

## Test Types

### Component (Unit) Tests
1. Tests are running with [`jest`](https://facebook.github.io/jest/) in and `JSDOM` environment.
1. Test in this API level are ones the require browser-like environment but can still run without any visual rendering. The nature of these tests is testing the behavior of a component and wiring methods. For example: clicking on a component triggers a callback, changing the input value, etc...
1. Every component will have the test file next to it with the convention of `ComponentName.spec.js`.
1. Every component uses and expose a **driver**, to help interacting with the component. Read more about drivers [here](./TEST_DRIVERS.md). The driver naming convention is `ComponentName.driver.js`

### Example
```js
import React from 'react';
import checkboxDriverFactory from './Checkbox.driver';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';

describe('Checkbox', () => {
    const createDriver = createDriverFactory(checkboxDriverFactory);

    it('should be unchecked and not disabled by default', () => {
    const driver = createDriver(<Checkbox/>);
    expect(driver.isChecked()).toBeFalsy();
    expect(driver.isDisabled()).toBeFalsy();
    });
});
```

### Browser (E2E) Tests
1. We will test components in browser if we need to test actual browser API (calculations, hovering, styling) or visual changes.
1. Tests are running with [`protractor`](http://www.protractortest.org/#/) which runs in actual `chrome` browser.
1. Visual regression tests are done with [`eyes`](https://github.com/wix/eyes.it) (powered by applitools).
1. Tests pages are the actual documentation done in `storybook`.
1. Every component will have the test file next to it with the convention of `ComponentName.e2e.js`.
1. Every component uses and expose a **driver**, to help interacting with the component. Read more about drivers [here](./TEST_DRIVERS.md). The driver naming convention is `ComponentName.protractor.driver.js`

#### Visual testing
1. Every test will be wrapped with `eyes.it()` to automatically capture screenshots at the beginning and end of every test.
1. If some complex interaction is needed during test, use `eyes.checkWindow()` to capture a screenshot.

```js
import eyes from 'eyes.it';

eyes.it('should test something with screenshot diff', () => {
  expect(assert).toEqual(expectation);
});

eyes.it('should test something with a screenshot on demand', async () => {
  // do some manipulation, for example scroll
  await eyes.checkWindow('after scolling');
  // do other manipulations
});
```

## Running the tests

### Running all:
1. `npm run build && npm run test`

### Running components/unit tests:
1. single run: `npm run test:unit`
1. watch mode: `npm start`

#### Debugging
1. In watch mode, you can use `jest`'s interactive mode, for example, press `p` in your command line and type the name of the test:
<img src="https://raw.githubusercontent.com/wix/wix-style-react/master/docs/assets/jest-interactive.png" alt="Interactive Jest Preview" width="600">

### Running Browser tests only:
1. single run: `npm run build && npm run test:e2e`.
  * Running `npm run build` between tests is required only if making changes to the component. Changing the tests doesn't require building again.
1. watch mode:
  * `npm run storybook` - serve storybook in watch
  * `npm run test:e2e-only` - run just e2e tests in separate terminal instance

#### Running a single test
1. use `eyes.it` instead of `it` or `eyes.fit` to focus one test.

#### Debugging
1. Use `browser.sleep(10000)` for quick browser stop and debugging.
