import React, { useState, useEffect } from 'react'
import {  getCookie,removeCookie } from '../utils/cookie';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";


const Mypage =()=> {
    
    const [id, setId] = useState("");
    const navigate = useNavigate();
 
    const navigateToMain= () => {
        navigate("/");
    };
    useEffect(()=>{
        console.log(getCookie('id').id)
        setId(getCookie('id').id)
    },[])
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        {id} 님 안녕하세요
    </Header>
  
    <Form size='large'>
                <Segment stacked>
                <Button color='teal' fluid size='large' onClick={()=>{
                    removeCookie('id');
                    navigateToMain();
                    console.log(getCookie('id'))
                }}>
                     Logout
                </Button>
                </Segment>
            </Form>
    
    </Grid.Column>
</Grid>
  )
}

export default Mypage