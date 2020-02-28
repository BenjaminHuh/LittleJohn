import { connect } from 'react-redux';

import { logout, updateUser } from '../../actions/session_actions';
import { getSummary } from '../../actions/stocks_actions';
import { updateSummary } from '../../util/stocks_api_util';
import Navbar from './navbar';

const mSTP = ({ session, entities: { users, stock } }) => ({
    currentUser: users[session.id],
    stock
});

const mDTP = dispatch => {
  // debugger
  return ({
    logout: () => dispatch(logout()),
    updateUser: user => dispatch(updateUser(user)),
    getSummary: user => dispatch(getSummary(user)),
    updateSummary: () => updateSummary()
});
}

export default connect(mSTP, mDTP)(Navbar);
