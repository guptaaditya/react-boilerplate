import React from 'react';
import Background from 'views/background';
import CenteredPane from 'views/centeredpane';
import Container from 'views/container';
import 'views/styles/dashboard.scss';  

function Dashboard(props) {
    return (
        <>
            <Background className='dashboard'>
                <CenteredPane className='false-ceiling'>
                    <Container className='limits'>
                    </Container>
                    <Container className='pairs'>
                    </Container>
                    <Container className='secondary-1'>
                    </Container>
                    <Container className='secondary-2'>
                    </Container>
                    <Container className='vertical-bars'>
                    </Container>
                    <Container className='graph'>
                    </Container>
                </CenteredPane>
            </Background>
        </>
    );
}

export default Dashboard;