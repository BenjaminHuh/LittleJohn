import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { getStocks, getStock } from './actions/stocks_actions';
import { logout } from './actions/session_actions';
import { getNews } from './util/news_api_util';
import { getIexStock } from './util/stocks_api_util';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getNews = getNews;
    window.getStocks = getStocks;
    window.getStock = getStock;
    window.getIexStock = getIexStock;
    // window.getPortfolio = getPortfolio;

    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})