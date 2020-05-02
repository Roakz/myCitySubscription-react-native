import * as React from 'react'
// Use the reduducer for state manipulation
const Reducer = (state, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                // posts: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;