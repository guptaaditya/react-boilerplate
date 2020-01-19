import React from 'react';
import { Button } from 'semantic-ui-react';

export default function ButtonBlock(props) {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    );
}