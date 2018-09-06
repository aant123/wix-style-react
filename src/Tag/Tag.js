import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Tag.scss';
import CloseButton from '../CloseButton';
import WixComponent from '../BaseComponents/WixComponent';
import Text from '../Text';
import noop from 'lodash/noop';

/**
  * A Tag component
  */
class Tag extends WixComponent {
  render() {
    const {id, children, thumb, removable, onClick, onRemove, size, wrap, disabled, theme, maxWidth} = this.props;

    const className = classNames(
      styles.root,
      styles[`${theme}Theme`],
      {
        [styles.tagWithRemoveButton]: removable && !disabled,
        [styles.large]: size === 'large',
        [styles.tagWrap]: wrap,
        [styles.disabled]: disabled
      },
    );

    return (
      <span
        className={className}
        disabled={disabled}
        id={id}
        title={wrap ? children : ''}
        onClick={() => onClick(id)}
        style={{maxWidth: `${maxWidth}px`}}
        >
        {thumb && <span className={styles.thumb}>{thumb}</span>}
        <Text className={wrap ? styles.innerTagWrap : ''} size={size === 'large' ? 'medium' : 'small'} >{children}</Text>
        {removable && !disabled && <a
          className={styles.tagRemoveButton}
          onClick={event => {
            event.stopPropagation();
            onRemove(id);
          }}
          ><CloseButton size={size} theme="close-dark"/></a>}
      </span>
    );
  }
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,

  /** when set to true this component is disabled  */
  disabled: PropTypes.bool,

  /** The id of the Tag  */
  id: PropTypes.string.isRequired,

  /** Callback function that pass `id` property as parameter when clicking on Tag */
  onClick: PropTypes.func,

  /** Callback function that pass `id` property as parameter when removing the Tag  */
  onRemove: PropTypes.func,

  /** If the Tag is removable then it will contain a small clickable X */
  removable: PropTypes.bool,

  /** The height of the Tag */
  size: PropTypes.oneOf(['small', 'large']),

  /** theme of the Tag */
  theme: PropTypes.oneOf(['standard', 'error', 'warning']),

  /** An optional thumb to display as part of the Tag */
  thumb: PropTypes.element,

  /** An optional maximum tag width in `px` for cropping. Should be used in pair with `wrap` property  */
  maxWidth: PropTypes.number,

  /** Whether to display ellipsis (...) for long content */
  wrap: PropTypes.bool
};

Tag.defaultProps = {
  onClick: noop,
  onRemove: noop,
  size: 'small',
  removable: true,
  theme: 'standard',
  wrap: false
};

export default Tag;
