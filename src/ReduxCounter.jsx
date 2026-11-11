import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './Slices/ReduxCounterSlice.js'
function ReduxCounter() {
    const value = useSelector((state) => state.ReduxCounter.count)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Redux Counter</h1>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}
export default ReduxCounter