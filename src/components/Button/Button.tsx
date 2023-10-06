import React, {ReactNode} from 'react';

type PropsType = {
    onClick: () => void
    disabled: boolean
    children?: ReactNode
}

export const Button: React.FC<PropsType> = (props) => {
    const {onClick, disabled, children, ...restProps} = props

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button onClick={onClickHandler} disabled={disabled}>{children}</button>
    );
};