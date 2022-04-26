import React, {useState} from "react"
import 'materialize-css'
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
    const routes = useRoutes(false)

    // const [count, setCount] = useState(0)
    //
    // const addCount = () => {
    //     setCount(count => count + 1)
    //     console.log('Count', count)
    // }

    return (
        <BrowserRouter>
            <div className='grey darken-3 container-body'>
                <div className="container">
                    { routes }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
