import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'
import { MaterialUISwitch } from './MUI'

export const Header = () => {
    const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }
    const dispatch = useDispatch()

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
                <NavLink to="/list" className={getActiveClass}>List</NavLink>
                <MaterialUISwitch sx={{ m: 1 }}
                    onClick={() => dispatch(toggleThemeAction())} />
            </div>
        </header>
    )
}