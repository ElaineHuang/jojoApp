import { connect } from 'react-redux';
import Home from 'components/Home';
import { toggleDialog } from 'reducers/ui';
import { getUser } from 'reducers/users';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDialog: bindActionCreators(toggleDialog, dispatch),
    getUser: bindActionCreators(getUser, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
