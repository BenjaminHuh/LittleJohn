import React from 'react';
import { connect } from 'react-redux';
import { signin, clearSessionErrors } from '../../actions/session_actions';
import Signin from './signin';


const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    signin: formUser => dispatch(signin(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(Signin);