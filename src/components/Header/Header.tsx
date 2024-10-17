import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'
import { FormControlLabel } from '@mui/material'
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
                <FormControlLabel
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    label="MUI switch"
                    onClick={() => dispatch(toggleThemeAction())}
                    className={classes.toggle}
                />
            </div>
        </header>
    )
}