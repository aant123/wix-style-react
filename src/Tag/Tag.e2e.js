import eyes from 'eyes.it';
import {createStoryUrl} from '../../test/utils/storybook-helpers';
import {waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {tagTestkitFactory} from '../../testkit/protractor';

const tagDriver = tagTestkitFactory({dataHook: 'storybook-tag'});

describe('Tag', () => {
  const url = createStoryUrl({kind: '12. Other', story: '12.5 Tag'});

  beforeAll(async () => {
    await browser.get(url);
    await waitForVisibilityOf(tagDriver.element(), 'Cannot find <Tag/>');
  });

  eyes.it('should render', async () => {
    autoExampleDriver.setProps({removable: 'false'});
    await eyes.checkWindow('without remove button');
    autoExampleDriver.remount();
    autoExampleDriver.setProps({size: 'large'});
    await eyes.checkWindow('large size');
    autoExampleDriver.setProps({removable: 'false'});
    await eyes.checkWindow('large size without remove button');
  });
});
