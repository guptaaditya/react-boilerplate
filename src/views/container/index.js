import React from 'react';

export default function Container(props) {
    const { children, ...containerProps } = props;
    return (
        <div {...containerProps}>
            {children}
        </div>
    );
}