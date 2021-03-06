import React from 'react';
import Tooltip from 'wix-style-react/Tooltip';
import Button from 'wix-style-react/Button';

import styles from './Example.scss';

const content = (
  <div>
    Custom Content...&nbsp;
    <Button onClick={() => alert('You clicked!')} height="small">Click</Button>
  </div>
);

export default () =>
  <Tooltip active placement="right" alignment="center" content={content} showTrigger="custom" hideTrigger="custom">
    <div className={styles.box}>Custom Content</div>
  </Tooltip>;
