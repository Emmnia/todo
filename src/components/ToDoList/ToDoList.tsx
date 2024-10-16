import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
    const checkedList = (flag: boolean) => {
        return props.todos
            .filter((item) => item.isDone === flag)
            .map((item) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={item.id}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo} />
                )
            })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList(false)}
            </ul>
            <ul className="todo-list completed">
                {checkedList(true)}
            </ul>
        </div>
    )
}