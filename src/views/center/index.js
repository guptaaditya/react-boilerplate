import React from 'react';

export default function Center(props) {
    const { children, ...centerProps } = props;
    return <div {...centerProps}>{children}</div>
}