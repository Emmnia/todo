import { Theme } from '../models/theme'

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#4682B4',
        backgroundSecondary: '#EDF0F1'
    }
}


const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: 'black',
        backgroundSecondary: 'gray'
    }
}

export const themes = {
    light: light,
    dark: dark
}