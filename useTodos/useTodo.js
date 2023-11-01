import {useEffect, useReducer} from "react";
import {TodoReducer} from "./todoReducer";

export const UseTodo = () => {
    //#region ParametersReducer
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    //#endregion
    //#region Hooks
    const [todos, dispatch] = useReducer(TodoReducer, [], init)

    useEffect(() => {
        console.log(todos)
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    //#endregion
    //#region fnEventos
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        console.log({id});
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        })
    }
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch(action);
    }
    const todosCount = () => (todos.length)
    const pendingTodosCount = () => (todos.filter(todo => !todo.done).length)
    //#endregion

    return {
        todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount
    }
}
