const summariesReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch (action.type) {
        case "GET_SUMMARY":
            Object.keys(action.summary).forEach(id => {
                nextState[id] = action.summary[id]
            })
            return nextState;

        case "CLEAR_SUMMARY":
            return Object.assign({});

        default:
            return state;
    }
}

export default summariesReducer;
