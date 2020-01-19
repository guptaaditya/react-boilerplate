import React from 'react';

export default function Text(props) {
    const { children, ...textDivProps } = props;
    return (
        <div {...textDivProps}>
            {children}
        </div>
    );
}