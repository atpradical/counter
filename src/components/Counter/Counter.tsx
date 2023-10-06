import React, {useState} from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

export const Counter = () => {

    const min = 0
    const max = 5

    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        if (counter < 5) {
            const value = counter + 1
            setCounter(value)
        }
    }

    const resetCounter = () => {
        setCounter(min)
    }

    return (
        <div className={s.counter}>
            <span className={counter === max ? s.limit : ''}>{counter}</span>
            <div>
                <Button onClick={increaseCounter} disabled={counter === max}>inc</Button>
                <Button onClick={resetCounter} disabled={counter === min}>reset</Button>
            </div>
        </div>
    );
};