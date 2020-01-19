import React from 'react';
import { Input } from 'semantic-ui-react';

export default function InputBlock(props) {
    const { iconType, ...inputProps } = props;
    return (
        <Input icon={props.iconType} {...inputProps} />
    );
}