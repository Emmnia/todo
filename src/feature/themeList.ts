import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../models/theme'
import { themes } from '../styles/themes'

export interface ThemeState {
    theme: Theme
}

const initialState: ThemeState = {
    theme: themes['light']
}

export const themeSlice = createSlice({
    name: 'themeList',
    initialState,
    reducers: {
        toggleThemeAction: (state) => {
            if (state.theme.name === 'light') {
                state.theme = themes['dark']
            } else {
                state.theme = themes['light']
            }
        }
    }
})

export const { toggleThemeAction } = themeSlice.actions

export default themeSlice.reducer