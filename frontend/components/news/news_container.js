import React from 'react';
import { connect } from 'react-redux';
import News from './news';
import { getNews, clearNews } from '../../actions/news_actions';


const mSTP = (state, ownProps) => {
    const ticker = Object.keys(state.entities.stock)[0]
    return ({
        news: state.entities.news,
        stock: ownProps.stock || state.entities.stock[ticker].info,
        ticker
    })
}

const mDTP = dispatch => ({
    getNews: topic => dispatch(getNews(topic)),
    clearNews: () => dispatch(clearNews()),
    getStock: ticker => dispatch(getStock(ticker))

})

export default connect(mSTP, mDTP)(News);