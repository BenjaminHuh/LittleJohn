import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { getSummary } from '../../actions/stocks_actions';

const mSTP = ({ session, entities: { users, summary } }) => {

    return {
        currentUser: users[session.id],
        summary
    };
};

const mDTP = dispatch => {
    return {
        getSummary: user => dispatch(getSummary(user))
    }
}

export default connect(mSTP, mDTP)(Dashboard);
