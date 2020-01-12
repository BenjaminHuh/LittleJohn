import {
    RECEIVE_STOCKS_ERRORS,
    CLEAR_STOCKS_ERRORS
} from '../actions/stocks_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STOCKS_ERRORS:
            return action.errorsl
            
        case CLEAR_STOCKS_ERRORS:
            return [];
    
        default:
            return state;
    }
}