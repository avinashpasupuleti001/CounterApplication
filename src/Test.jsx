import {useSelector, useDispatch} from 'react-redux'
function Test() {   
    const value = useSelector((state) => state.ReduxCounter.count)
    return (
        <div>
            <h1>Test</h1>
            <h1>In Test Component ----- {value}</h1>
        </div>
    )
}
export default Test;