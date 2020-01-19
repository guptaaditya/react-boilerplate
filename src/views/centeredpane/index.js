import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function CenteredPane(props) {
    const { children, ...paneProps } = props;
    return (
        <Grid {...paneProps}>
            {children}
        </Grid>
    );
}