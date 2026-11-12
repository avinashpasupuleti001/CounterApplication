
import ReduxCounter from './ReduxCounter.jsx'
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate
} from 'react-router-dom'

import Test from './Test.jsx'

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Welcome to React</h1>

            <ReduxCounter />

            <button onClick={() => navigate('/test')}>
                Go to Test
            </button>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/test',
        element: <Test />
    }
])

function App() {
    return <RouterProvider router={appRouter} />
}

export default App