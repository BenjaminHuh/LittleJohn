import React from 'react';
import { connect } from 'react-redux';
import { signup, signin } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = state => ({
    signupErrors: state.errors.session,
    formType: 'Sign Up'
})
const mDTP = dispatch => ({
    signup: formUser => dispatch(signup(formUser)),
    signin: formUser => dispatch(signin(formUser))
})

export default connect(mSTP, mDTP)(Signup);