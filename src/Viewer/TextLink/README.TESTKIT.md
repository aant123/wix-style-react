# TextLink Testkits

> TextLink

## TextLink TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getContent | - | string | returns the TextLink content |
| getSize | - | string | can be 'small' or 'medium' |
| isDarkBackground | - | boolean | returns true if the background is dark |
| isLightBackground | - | boolean | returns true if the background is light |
| isUnderline | - | boolean | returns true if the TextLink have underline |
| hover | - | - | hover the TextLink |
| hoverLink | - | - | hover the TextLink actual generated a tag|
| leaveLink | - | - | leave the TextLink actual generated a tag |
| getLink | - | - | get the TextLink a tag href attribute |
| getTarget | - | - | get the TextLink a tag target attribute |
| getColor | - | - | get the Color from the a tag style attribute |
| getRel | - | - | get the TextLink a tag rel attribute |
| exists | - | bool | fulfilled if element in the DOM |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {textLinkTestkitFactory} from 'wix-style-react/dist/testkit';
  import {textLinkTestkitFactory as enzymeTextLinkTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><TextLink dataHook={dataHook}/></div>);
  const testkit = enzymeTextLinkTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><TextLink dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = textLinkTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```