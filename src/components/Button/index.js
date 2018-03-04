import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './button.scss';
import cx from 'classnames';

const Button = ({className = 'btn', onClick, children = null, type = 'button'}) => {
  return (
    <button
      className={styles[className]}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  type: PropTypes.string,
};

export default Button;
