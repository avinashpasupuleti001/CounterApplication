import { createSlice } from '@reduxjs/toolkit'
const ReduxCounterSlice = createSlice({
    name: 'ReduxCounter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        }
    }
})
export const { increment, decrement, reset } = ReduxCounterSlice.actions
export default ReduxCounterSlice.reducer