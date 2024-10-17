import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <a className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} target="_blank" href={`todo/list/${todo.id}`} rel="noopener noreferrer"> {todo.text}</a >
    )
}