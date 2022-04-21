import React, {useState} from "react"
import 'materialize-css'

function App() {

    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count => count + 1)
        console.log('Count', count)
    }


    return (
        <div className='grey darken-3 container-body'>
            <div className='container'>
                <div className='container-flex'>
                    <h3>Counter: {count}</h3>
                    <button className='btn-floating btn-large waves-effect waves-light green' onClick={addCount}>
                        <i className="material-icons">+</i>
                    </button>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default App;
