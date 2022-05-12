import { Todo, TodoState } from "./interfaces"

type TodoActions = | {
    type: 'add/todo',
    payload: Todo
} |
{
    type: "toggle/todo",
    payload: {id: string}
}

export const todoReducer = (state: TodoState, action: TodoActions): TodoState => {
    switch(action.type) {
        case "add/todo":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}