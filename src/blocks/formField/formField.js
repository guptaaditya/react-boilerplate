import React from 'react';
import { Form } from 'semantic-ui-react';

export default function FormField(props) {
    return (
        <Form.Field width={16} inline={props.isLine || true}>
            {props.label && <label>{props.label}</label> }
            {props.children}
        </Form.Field>
    );
}