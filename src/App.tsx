import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [max, setMax] = useState<number>(5)
    const [start, setStart] = useState<number>(0)
    const [count, setCount] = useState(0)

    const [message, setMessage] = useState('')

    const applySettings = () => {
        setCount(start)
        setMessage('')
    }

    const isError = (max:number, start:number): boolean => {
        if (max === start || max < start || max < 0 || start < 0) {
            return true
        }
        return false
    }

    let error = isError(max, start)

    useEffect(() => {
        if (error) {
            setMessage('incorrect value!')
        } else {
            setMessage('enter values and press set')
        }
    }, [error])


    return (
        <div className="App">
            <Settings
                getMax={setMax}
                getStart={setStart}
                applySettings={applySettings}
                newMax={max}
                newStart={start}
                error={error}
            />

            <Counter
                max={max}
                count={count}
                start={start}
                setCount={setCount}
                error={error}
                message={message}
            />
        </div>
    );
}

export default App;
