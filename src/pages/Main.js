import React, { useEffect } from 'react'

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

import {  getCookie,removeCookie } from '../utils/cookie';

const Main =()=> {
  const navigate = useNavigate();
 
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };
  
  console.log(getCookie('id'))

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        Hello world !
    </Header>
    <Form size='large'>
        <Segment stacked>
        
        <Button color='teal' fluid size='large' onClick={navigateToLogin}>
            Login
        </Button>
        <br/>
        <Button background-color='light-grey' fluid size='large' onClick={navigateToSignup}>
              Sign Up
          </Button>
        </Segment>
    </Form>
    
    </Grid.Column>
</Grid>
  )
}

export default Main