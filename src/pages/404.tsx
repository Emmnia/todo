import { NavLink } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="container">
            <h1>Not Found</h1>
            <NavLink to="/">To Home</NavLink>
        </div>
    )
}