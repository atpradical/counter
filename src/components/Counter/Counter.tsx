import React from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type PropsType = {
    max: number
    start: number
    count: number
    error: boolean
    message: string
    setCount: (value: number)=> void
}

export const Counter: React.FC<PropsType> = (props) => {
    const {max, count, start, error, message, setCount} = props

    const increaseCounter = () => {
        if (count < max) {
            const value = count + 1
            setCount(value)
        }
    }

    const resetCounter = () => {
        setCount(0)
    }

    return (
        <div className={s.counter}>
            <span
                className={error || count === max
                    ? `${s.span} ${s.limit}`
                    : `${s.span}`}>
                {message || count}</span>
            <div>
                <Button
                    onClick={increaseCounter}
                    disabled={error || count === max}
                >inc</Button>

                <Button
                    onClick={resetCounter}
                    disabled={error || count === start}
                >reset</Button>
            </div>
        </div>
    );
};