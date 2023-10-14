import React, {ReactNode} from 'react';
import s from './Button.module.css'

type PropsType = {
    onClick: () => void
    disabled?: boolean
    children?: ReactNode
}

export const Button: React.FC<PropsType> = (props) => {
    const {onClick, disabled, children, ...restProps} = props

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button
            className={s.button}
            onClick={onClickHandler}
            disabled={disabled}
        >{children}</button>
    );
};