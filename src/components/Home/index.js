import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import image from 'assets/bear.jpg';
import styles from './home.scss';
import { Dialog, Button, Loading } from 'components';

export default class Home extends PureComponent {
  static propTypes = {
    toggleDialog: PropTypes.func,
    ui: PropTypes.object,
    getUser: PropTypes.func,
    users: PropTypes.array,
  };

  static defaultProps = {
    toggleDialog: () => console.log('onToggle'),
    ui: {
      dialog: { show: false, component: null },
      isLoading: false,
    },
    getUser: () => console.log('getUser'),
    users: [],
  };

  componentDidMount () {
    this.props.getUser();
  }

  handleDialog = () => {
    this.props.toggleDialog('testDialog');
  }

  handleApiCall = () => {
    this.props.getUser();
  }

  render () {
    const {
      ui: {
        dialog: { show, component },
        isLoading,
      },
      toggleDialog,
      users,
    } = this.props;

    return (
      <div className={styles.container}>
        <h1>Dialog / Button Component</h1>
        <Button onClick={this.handleDialog}>Dialog Test</Button>
        <h1>Image resource Test</h1>
        <img style={{ width: '300px' }} src={image} alt="images" />
        <h1>API Test</h1>
        <Button onClick={this.handleApiCall}>Fetch API</Button>
        {
          isLoading ? <Loading /> : users.length > 0 ? users.map(({ _id, name, likes }) => (
            <ul key={_id} className={styles['api-block']}>
              <li>ID: {_id}</li>
              <li>Name: {name}</li>
            </ul>
          )) : (
            <div className={styles['warning-block']}>
              You should create a user first!
            </div>
          )
        }
        <Dialog
          show={show && component === 'testDialog'}
          onToggle={toggleDialog}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.<br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
        </Dialog>
      </div>
    );
  }
}
