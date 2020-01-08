import React from 'react';
import { connect } from 'react-redux';
import Welcome from './welcome';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

export default connect(mSTP, null)(Welcome);
