import React from 'react';
import { connect } from 'react-redux';
import { signup, signin, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = state => ({
    errors: state.errors.session
})
const mDTP = dispatch => ({
    signin: formUser => dispatch(signin(formUser)),
    signup: formUser => dispatch(signup(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(Signup);