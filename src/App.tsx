import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [max, setMax] = useState<number>(5)
    const [start, setStart] = useState<number>(0)
    const [newMax, setNewMax] = useState<number>(max)
    const [newStart, setNewStart] = useState<number>(start)

    const applySettings = (newMax: number, newStart: number) => {
        setMax(newMax)
        setStart(newStart)
        console.log(`Max and Start states updaed`)
        console.log(`Max is ${max} and Start is ${start}`)
    }

    const isError = (max:number, start:number): boolean => {
        if (max === start || max < start || max < 0 || start < 0) {
            return true
        }
        return false
    }

    let error = isError(max, start)

    return (
        <div className="App">
            <Settings
                getMax={setNewMax}
                getStart={setNewStart}
                applySettings={applySettings}
                newMax={newMax}
                newStart={newStart}
                error={error}
            />

            <Counter
                max={max}
                start={start}
                error={error}
            />
        </div>
    );
}

export default App;
