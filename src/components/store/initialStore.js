export const initialStore = () => {
    return {
        todos: [{id: 1, title: "My nice todo", completed: false}],
        user: {
            name: "Bob"
        },
    }
}