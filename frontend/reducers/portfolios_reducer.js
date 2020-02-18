import {
    GET_OWNED_STOCKS,
    GET_PORTFOLIO_ITEM,
    CLEAR_PORTFOLIO_LIST,
    CLEAR_WATCHLIST_LIST
} from '../actions/stocks_actions'

const portfoliosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case GET_OWNED_STOCKS:
            Object.keys(action.stocks).forEach(id => {
                nextState[id] = action.stocks[id]
            })
            return nextState;

        case GET_PORTFOLIO_ITEM:
            // debugger
            Object.keys(action.stock).forEach(id => {
                let newStock = Object.assign({}, nextState[id])
                newStock.info = action.stock[id]
                nextState[id] = newStock
            })
            return nextState;

        case CLEAR_PORTFOLIO_LIST:
            nextState = [];
            // Object.keys(action.portfolio).forEach(key => {
            //     delete nextState[key].info
            // })
            return nextState;

        case CLEAR_WATCHLIST_LIST:
            Object.keys(action.watchlist).forEach(key => {
                delete nextState[key]
            })
            return nextState;

        case 'CLEAR_STOCK_ITEM':
            return Object.assign({}, {});

        default:
            return state;
    }
}

export default portfoliosReducer;