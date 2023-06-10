import { RouterProvider } from 'react-router-dom';
import { RouterConfig } from './routes';

function App() {
    return (
        <>
            <RouterProvider router={RouterConfig} />
        </>
    );
}

export default App;
