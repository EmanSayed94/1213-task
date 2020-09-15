const initialState = [];

export default (state = initialState, action) => {
    let newState;

    switch (action.type) {
        default:
            newState = state;
            break;
    }
    return newState;
} 
