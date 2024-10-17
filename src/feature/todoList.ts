import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-item'
import { toast } from 'react-toastify'
import { v4 as uuid } from 'uuid'

export interface TodoState {
    todos: ToDo[]
}

const initialState: TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {
            const newToDo: ToDo = {
                id: uuid(),
                text: action.payload,
                isDone: false
            }
            state.todos = [...state.todos, newToDo]
            toast(`Задача '${action.payload}' создана`)
        },
        updateAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isDone = !todo.isDone
                }
                return todo
            })
            state.todos = newTodos
            toast(`Статус задачи '${action.payload.text}' изменен`)
        },
        deleteAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
            state.todos = newTodos
            toast(`Задача '${action.payload.text}' удалена`)
        },
    }
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer