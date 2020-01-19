import React from 'react';

import { Form } from 'semantic-ui-react';

export default function FormBlock(props) {
    const { children, ...formProps } = props;
    return (
        <Form {...formProps}>
            {children}
        </Form>
    );
}