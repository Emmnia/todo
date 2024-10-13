import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"

interface ComponentProps {
    todos: ToDo[]
}

export const HomePage = ({ todos }: ComponentProps) => {
    return (
        <div className="container">
            {
                todos.map((todo: ToDo) => {
                    return (
                        <ListItem
                            todo={todo}
                            key={todo.id} />
                    )
                })
            }
        </div>
    )
}