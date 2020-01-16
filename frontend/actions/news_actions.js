import * as NewsUtil from '../util/news_api_util';

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const CLEAR_NEWS = 'CLEAR_NEWS';

export const getNews = topic => dispatch => (
    NewsUtil.getNews(topic) 
        .then(news => dispatch({ type: RECEIVE_NEWS, news }))
)

export const clearNews = () => ({
    type: CLEAR_NEWS
})

