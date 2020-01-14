import {
    GET_OWNED_STOCKS,
    // GET_PORTFOLIO_ITEM
} from '../actions/stocks_actions'

const portfoliosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_OWNED_STOCKS:
            let nextState = Object.assign({}, state);
            Object.keys(action.stocks).forEach(id => {
                nextState[id] = action.stocks[id]
            })
            return nextState;
        // case GET_PORTFOLIO_ITEM:


        default:
            return state;
    }
}

export default portfoliosReducer;