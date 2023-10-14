import React, {useState} from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type PropsType = {
    max: number
    start: number
    error: boolean
}

export const Counter: React.FC<PropsType> = (props) => {
    const {max, start, error} = props
    const [counter, setCounter] = useState(start)

    const increaseCounter = () => {
        if (counter < max) {
            const value = counter + 1
            setCounter(value)
        }
    }

    const resetCounter = () => {
        setCounter(start)
    }

    return (
        <div className={s.counter}>
            <span
                className={error || counter === max
                    ? `${s.span} ${s.limit}`
                    : `${s.span}`}>
                {error
                    ? 'Incorrect value!'
                    : counter
                }</span>
            <div>
                <Button onClick={increaseCounter} disabled={error || counter === max}>inc</Button>
                <Button onClick={resetCounter} disabled={error || counter === start}>reset</Button>
            </div>
        </div>
    );
};