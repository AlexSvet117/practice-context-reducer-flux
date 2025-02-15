
export const ACTIONS = {
    ADD_TODO: "ADD_TODO",
    REMOVE_TODO: "REMOVE_TODO"
}


export function storeReducer(state, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case ACTIONS.REMOVE_TODO:
            return
        default: return state;
    }

}
