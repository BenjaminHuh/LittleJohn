import {
    GET_WATCHED_STOCKS,
    GET_WATCHLIST_ITEM
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
                debugger
                nextState[id].info = action.stock[id]
            })
            return nextState;

        default:
            return state;
    }
}

export default watchlistsReducer;