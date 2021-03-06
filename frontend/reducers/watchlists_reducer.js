import {
    GET_WATCHED_STOCKS,
    GET_WATCHLIST_ITEM,
    CLEAR_WATCHLIST_LIST
} from '../actions/stocks_actions'

const watchlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case GET_WATCHED_STOCKS:
            Object.keys(action.stocks).forEach(id => {
                nextState[id] = action.stocks[id]
            })
            return nextState;

        case GET_WATCHLIST_ITEM:
            Object.keys(action.stock).forEach(id => {
                let newStock = Object.assign({}, nextState[id])
                newStock.info = action.stock[id]
                nextState[id] = newStock
            })
            return nextState;
        
        case CLEAR_WATCHLIST_LIST:
            return Object.assign({});

        default:
            return state;
    }
}

export default watchlistsReducer;