import { Link } from "react-router-dom"
import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <Link className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} target="_blank" to={`/list/${todo.id}`} rel="noopener noreferrer"> {todo.text}</Link>
    )
}