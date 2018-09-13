import eyes from 'eyes.it';
import {formFieldTestkitFactory, inputTestkitFactory} from '../../testkit/protractor';
import {waitForVisibilityOf, scrollToElement} from 'wix-ui-test-utils/protractor';
import {getStoryUrl} from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

const storyUrl = getStoryUrl('Components', 'FormField');
const driver = formFieldTestkitFactory({dataHook: 'storybook-formfield'});


describe('FormField', () => {
  beforeAll(() =>
    browser.get(storyUrl));

  eyes.it('should render with label', async () => {
    await autoExampleDriver.setProps({label: 'hello'});
    await waitForVisibilityOf(driver.element(), 'Cannot find FormField component');
    expect(await driver.getLabel().getText()).toMatch('hello');
  }, {version: 'no maxlength'});

  eyes.it('should render as required given required and no label props', async () => {
    await autoExampleDriver.setProps({required: true});
    await waitForVisibilityOf(driver.element(), 'Cannot find FormField component');
    expect(await driver.isRequired()).toBe(true);
  });

  eyes.it('should render info icon given infoContent prop', async () => {
    await autoExampleDriver.setProps({infoContent: 'hello'});
    await waitForVisibilityOf(driver.element(), 'Cannot find FormField component');
    expect(await driver.isInfoIconVisible()).toBe(true);
  });

  eyes.it('should render info icon given infoContent prop', async () => {
    await autoExampleDriver.setProps({infoContent: 'hello'});
    await waitForVisibilityOf(driver.element(), 'Cannot find FormField component');
    expect(await driver.isInfoIconVisible()).toBe(true);
  });

  eyes.it('should render length count', async () => {
    console.log('111');
    const formFieldDriver = formFieldTestkitFactory({dataHook: 'storybook-formfield-length-count'});
    const inputDriver = inputTestkitFactory({dataHook: 'storybook-formfield-length-count-input'});
    const element = formFieldDriver.element();
    await scrollToElement(element);
    await eyes.checkRegionByElement(element, 'count is zero');
    await inputDriver.enterText('11111-11111');
    await inputDriver.enterText('11111-11111-11111-11111');
  });
});
