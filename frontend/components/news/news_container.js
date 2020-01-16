import React from 'react';
import { connect } from 'react-redux';
import News from './news';
import { getNews, clearNews } from '../../actions/news_actions';


const mSTP = state => ({
    news: state.entities.news
})

const mDTP = dispatch => ({
    getNews: topic => dispatch(getNews(topic)),
    clearNews: () => dispatch(clearNews())
})

export default connect(mSTP, mDTP)(News);