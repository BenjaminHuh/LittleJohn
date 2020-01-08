import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import Signin from './signin';

const mDTP = dispatch => ({
    signin: formUser => dispatch(signin(formUser))
})

export default connect(null, mDTP)(Signin);