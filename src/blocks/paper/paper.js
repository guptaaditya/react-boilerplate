import React from 'react';
import { Segment } from 'semantic-ui-react';

export default function Paper(props) {
    const { children, ...paperProps } = props;
    return (
        <Segment {...paperProps}>
            {children}
        </Segment>
    );
}