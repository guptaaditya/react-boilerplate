import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import Input from 'blocks/input/input';
import Paper from 'blocks/paper/paper';
import Form from 'blocks/form/form';
import FormField from 'blocks/formField/formField';
import Button from 'blocks/button/button';
import Center from 'views/center';
import Text from 'views/text';
import Container from 'views/container';
import CenteredPane from 'views/centeredpane';
import Section from 'views/section';
import Header from 'components/header/header';

import 'views/styles/login.scss';
import { onLogin } from 'utils/ui';

function Login(props){
    return (
        <>
            <Container className='login2'>
                <CenteredPane className='outer-container'>
                    <Section width={16}>
                        <Paper raised className='no-padding'>
                            <CenteredPane container className='no-margin full-width'>
                                <Section tablet={8} largeScreen={8} mobile={16} >
                                    <Section width={16} >
                                        <Header />
                                    </Section>
                                    <Section width={16} >
                                        <Form size='large'>
                                            <Text>
                                                Welcome back!
                                            </Text>
                                            <br />
                                            <FormField isLine>
                                                <Input type="text" placeholder="Username/Email address" iconType='user' />
                                            </FormField>
                                            <FormField isLine>
                                                <Input type="password" placeholder="Password" iconType='lock' />
                                            </FormField>
                                            <Text className='text rember-forgotpass'>
                                                <Checkbox label='Remember me' /> 
                                                <Text className='forgot-password'>
                                                    <a href='#'>Forgot password?</a>
                                                </Text>
                                            </Text>
                                            <Button className='login-btns' id='submit' circular onClick={onLogin.bind(this, props)}>Login</Button>
                                            <Button className='login-btns' id='signup' circular onClick={() => {}}>Sign up</Button>
                                            <br />
                                            <br />
                                            <br />
                                            <Text className='tnc'>
                                                By signing up, you agree to Encryptics' terms and conditions
                                            </Text>
                                        </Form>
                                    </Section>
                                </Section>
                                <Section className='right-pane no-padding' tablet={8} largeScreen={8}>
                                    <video className='video' playsInline loop autoPlay>
                                        <source src={videoSrc} type="video/mp4" />
                                    </video>
                                </Section>
                            </CenteredPane>
                        </Paper>
                    </Section>
                </CenteredPane>
            </Container>
        </>
    );
}

export default withRouter(Login);
var videoSrc = 'https://dev-encryptics.pantheonsite.io/wp-content/uploads/2019/11/DataTransformWeb.mp4';