import React from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

type PropsType = {
    getMax: (value: number) => void
    getStart: (value: number) => void
    applySettings: (newMax: number, newStart: number) => void
    newMax: number
    newStart: number
    error: boolean
}

export const Settings: React.FC<PropsType> = (props) => {

    const {getMax, getStart, applySettings, newMax, newStart, error} = props

    const OnClickHandler = () => {
        applySettings(newMax, newStart)
    }

    return (
        <div className={s.settings}>
            <Input
                name='max value'
                onChange={getMax}
                value={newMax}
                error={error}
            />
            <Input
                name='start value'
                onChange={getStart}
                value={newStart}
                error={error}
            />
            <>
                <Button onClick={OnClickHandler}>set</Button>
            </>
        </div>
    );
};