import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    text: string
}

const initialState: FormState = {
    text: ''
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        resetText: (state) => {
            state.text = '';
        }
    }
})

export const { updateText, resetText } = formSlice.actions

export default formSlice.reducer