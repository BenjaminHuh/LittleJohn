import { RECEIVE_NEWS, CLEAR_NEWS } from '../actions/news_actions';

const newsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NEWS: 
            let nextState = Object.assign({}, state);
            Object.keys(action.news).forEach(id => {
                nextState[id] = action.news[id]
            })
            return nextState;
            
        case CLEAR_NEWS:
            return {};
            
        default:
            return state;
    }
}
export default newsReducer;