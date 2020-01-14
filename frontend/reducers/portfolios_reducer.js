import {
    GET_OWNED_STOCKS,
    GET_PORTFOLIO_ITEM
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
            Object.keys(action.stock).forEach(id => {
                nextState[id].info = action.stock[id]
            })
            return nextState;

        default:
            return state;
    }
}

export default portfoliosReducer;