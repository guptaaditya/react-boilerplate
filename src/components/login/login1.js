import React from 'react';
import { withRouter } from 'react-router-dom';
import Input from 'blocks/input/input';
import Paper from 'blocks/paper/paper';
import Form from 'blocks/form/form';
import FormField from 'blocks/formField/formField';
import Button from 'blocks/button/button';
import Center from 'views/center';
import Text from 'views/text';
import Container from 'views/container';
import Header from 'components/header/header';

import 'views/styles/login.scss';
import { onLogin } from 'utils/ui';

function Login(props) {
    return (
        <>
            <Header />
            <Container className='login1'>
                <Center className='all-center'>
                    {/* <Header size='large' color='white'>Login</Header> */}
                    <Paper>
                        <Form size='large'>
                            <FormField isLine>
                                <Input className='text' type="text" placeholder="Username/Email address" iconType='user' />
                            </FormField>
                            <FormField isLine>
                                <Input className='text' type="password" placeholder="Password" iconType='lock' />
                            </FormField>
                            <Text className='text forgot-password'>
                                <a href='#'>Forgot password?</a>
                            </Text>
                            <Button id='submit' color='themegreen' circular onClick={onLogin.bind(this, props)}>Submit</Button>
                            <Text className='sign-up'>
                                New user? <a href='#'>Sign up</a>
                            </Text>
                        </Form>
                    </Paper>
                </Center>
            </Container>
        </>
    );
}

export default withRouter(Login);