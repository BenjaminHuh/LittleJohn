import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

export default connect(mSTP, null)(Dashboard);
