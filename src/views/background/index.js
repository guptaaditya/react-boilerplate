import React from 'react';
import './background.scss';

export default function Background(props) {
    const { children, ...backgroundProps } = props;
    return (
        <div {...backgroundProps}>
            {children}
        </div>
    )
}