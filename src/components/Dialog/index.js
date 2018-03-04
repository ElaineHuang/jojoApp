import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './dialog.scss';
import cx from 'classnames';

export default class Dialog extends PureComponent {

  static propTypes = {
    onToggle: PropTypes.func,
    show: PropTypes.bool,
    children: PropTypes.any,
  };

  static defaultProps = {
    onToggle: () => console.log('onToggle'),
    show: false,
  };

  handleClose = (e) => {
    if (e.target === this.modal) {
      this.props.onToggle();
    }
  }

  handleToggle = () => {
    this.props.onToggle();
  }

  render () {
    const { show, children } = this.props;

    const dialogStyle = cx({
      [styles['dialog']]: true,
      [styles['show-dialog']]: show,
    });

    return (
      <div
        className={dialogStyle}
        onClick={this.handleClose}
        ref={(node) => {
          this.modal = node;
        }}
      >
        <div className={styles['modal-md']}>
          <h1>
            React Dialog
            <span className={styles.close} onClick={this.handleToggle}>×</span>
          </h1>
          <div className={styles['modal-content']}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
