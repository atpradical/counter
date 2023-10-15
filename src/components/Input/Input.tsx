import React, {ChangeEvent, useState} from 'react';
import s from './Input.module.css'

type PropsType = {
    name: string
    onChange: (value: number) => void
    value: number
    error: boolean
}

export const Input: React.FC<PropsType> = (props) => {

    const {name, onChange, value, error} = props
    const [inputValue, setInputValue] = useState(value)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.currentTarget.value))
        setInputValue(Number(event.currentTarget.value))
    }

    return (
        <div>
            <span
                className={error
                    ? `${s.error} ${s.span}`
                    : `${s.span}`}
            >{name}</span>

            <input
                className={error
                    ? `${s.error} ${s.field}`
                    : `${s.field}`}
                type={'number'}
                onChange={onChangeHandler}
                value={inputValue}
            />
        </div>
    );
};