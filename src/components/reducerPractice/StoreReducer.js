
export const initialState = {
    counter: 0
}

// will take two params: state, action
// state: the state
// action: object that will commonly contain {type: "INCREMENT", payload: {}}
export function reducer(state, action) {
    // dispatch({type: "INCREMENT", payload: someData})
    // simple control flow logic
    // INCREMENT -> login
    // DECREMENT -> logic
    // addTODO -> logic TODO
    switch(action.type) {
        case 'INCREMENT': 
            return {counter: state.counter + 1}
        case 'DECREMENT':
            return {counter: state.counter - 1}
        case 'Default': return state
    }

}