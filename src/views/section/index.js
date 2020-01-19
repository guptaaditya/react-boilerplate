import React from 'react';
import { Grid } from 'semantic-ui-react';
 
export default function Section(props) {
    const { children, ...sectionProps } = props;
    return (
        <Grid.Column {...sectionProps}>
            {children}
        </Grid.Column>
    )
}