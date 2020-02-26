import {
    GETTING_OWNED_STOCKS,
    DONE_GETTING_OWNED_STOCKS,   
    GETTING_WATCHED_STOCKS,
    DONE_GETTING_WATCHED_STOCKS
} from '../actions/stocks_actions.js';

const statusReducer = (state = { portfolioLoading: false, watchlistLoading: false }, action) => {

    switch (action.type) {
        case GETTING_OWNED_STOCKS:
            return Object.assign({}, state), { portfolioLoading: true };
        case DONE_GETTING_OWNED_STOCKS:
            return Object.assign({}, state), { portfolioLoading: false };

        case GETTING_WATCHED_STOCKS:
            return Object.assign({}, state), { watchlistLoading: true };

        case DONE_GETTING_WATCHED_STOCKS:
            return Object.assign({}, state), { watchlistLoading: false };
        default:
            return state;
    }

}

export default statusReducer;