import { connect } from 'react-redux';

import { logout, updateUser } from '../../actions/session_actions';
import Navbar from './navbar';

const mSTP = ({ session, entities: { users, stock } }) => ({
    currentUser: users[session.id],
    stock
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mSTP, mDTP)(Navbar);
