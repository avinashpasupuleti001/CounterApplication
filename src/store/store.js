import { configureStore } from '@reduxjs/toolkit';
import ReduxCounterReducer from '../Slices/ReduxCounterSlice.js'
const store = configureStore({
    name: 'store',
    reducer: {
       ReduxCounter: ReduxCounterReducer
    }
}
)
export default store