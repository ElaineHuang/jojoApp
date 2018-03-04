import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './loading.scss';
import loadingIcon from 'assets/hourglass.svg';

export default class Loading extends PureComponent {
  render () {
    return (
      <div className={styles.container}>
        <img
          className={styles['loading-icon']}
          src={loadingIcon} alt=""
        />
      </div>
    );
  }
}
