import ReactTestUtils from 'react-dom/test-utils';
import {isClassExists} from '../../test/utils';

import {testkitFactoryCreator} from 'wix-ui-test-utils/vanilla';
import buttonDriverFactory from '../Backoffice/Button/Button.driver';

const buttonTestkitFactory = testkitFactoryCreator(buttonDriverFactory);

const tagDriverFactory = ({element}) => {

  const thumb = element.querySelector('span');
  const contentWithoutThumb = element.querySelector('span');

  const getRemoveButtonDriver = () => {
    return buttonTestkitFactory({
      wrapper: element,
      dataHook: 'remove-button'
    });
  };

  return {
    exists: () => !!element,
    isLarge: () => isClassExists(element, 'large'),
    isStandardTheme: () => isClassExists(element, 'standardTheme'),
    isWarningTheme: () => isClassExists(element, 'warningTheme'),
    isErrorTheme: () => isClassExists(element, 'errorTheme'),
    isRemovable: () => getRemoveButtonDriver().exists(),
    removeTag: () => getRemoveButtonDriver().click(),
    click: () => ReactTestUtils.Simulate.click(element),
    isThumbExists: () => isClassExists(thumb, 'thumb'),
    isWrapped: () => isClassExists(element, 'tagWrap') && isClassExists(contentWithoutThumb, 'innerTagWrap'),
    isDisabled: () => isClassExists(element, 'disabled'),
    getLabel: () => element.textContent,
    getTitle: () => element.title
  };
};

export default tagDriverFactory;
