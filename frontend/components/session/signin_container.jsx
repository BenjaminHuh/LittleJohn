import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import Signin from './signin';


const mSTP = state => ({
    signinErrors: state.errors.session,
    formType: 'Sign In'
})

const mDTP = dispatch => ({
    signin: formUser => dispatch(signin(formUser))
})

export default connect(mSTP, mDTP)(Signin);