import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Header, Footer } from 'components';
import styles from './main.scss';

export default class Main extends PureComponent {

  render () {
    return (
      <div className={styles.container}>
        <Header pathname={this.props.location.pathname} />
        <div className={styles.content}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
