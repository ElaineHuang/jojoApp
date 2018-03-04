import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './footer.scss';

export default class Footer extends PureComponent {
  render () {
    return (
      <footer className={styles.footer}>
        Elaine Huang • starbrave1313677@gmail.com
      </footer>
    );
  }
}
