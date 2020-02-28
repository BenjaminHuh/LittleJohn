const summariesReducer = (state = {}, action) => {

    Object.freeze(state);
    
    switch (action.type) {
        case "GET_SUMMARY":
            let nextState = Object.assign({}, state);
            Object.keys(action.summary).forEach(id => {
                nextState[id] = action.summary[id]
            })
            return nextState;
    
        default:
            return state;
    }
}

export default summariesReducer;
