import { faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="container">
            <h1><FontAwesomeIcon icon={faFaceFrownOpen} /> Not Found</h1>
            <NavLink to="/">Back To List</NavLink>
        </div>
    )
}