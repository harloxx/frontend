import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import { setCookie, getCookie, removeCookie } from '../utils/cookie';

const Login =()=> {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
 
    const navigateToSignup = () => {
        navigate("/signup");
    };
    const onIdChangeHandler=(e)=>{
        setId(e.target.value);
    }
    const navigateToMypage = () => {
        navigate("/mypage");
    };
    const onPwdChangeHandler=(e)=>{
        setPassword(e.target.value);
    }

    const checkMember =()=>{
        axios.get('/checkauth',{
            params:{
                id:id,
                pwd:password
            }
        })
            .then((res)=>{
                console.log(res)
                if (res.data.result==='success'){
                    console.log('e')
                    onSet()
                    navigateToMypage()
                    onGet()
                }

            })
            .catch((error)=>{
                console.error('Error: ', error)
                alert("아이디, 비밀번호를 다시 확인해 주세요.")
            })
    }


    useEffect(() => {
        //renderAllMember()
        axios.get('/memberlist')
        .then(res=>{
            console.log(res.data)
        })
      }, [])

      const onSet = () => {
        setCookie('id', {id}, {
          path: '/',
          secure: true,
          maxAge: 3000
        })
      }
      const onGet = () => {
        const getVal = getCookie('id');
        console.log(getVal);
      }
      const onRemove = () => {
        removeCookie('id')
      }

    return (
        <div>

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Id' value ={id} onChange={onIdChangeHandler}/>
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value ={password} onChange={onPwdChangeHandler}
                />

                <Button color='teal' fluid size='large' onClick={()=>{
                    checkMember()
                    setId("");
                    setPassword("");
                }}>
                    Login
                </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='#' onClick={navigateToSignup}>Sign Up</a>
            </Message>
            </Grid.Column>
        </Grid>
        </div>
    )
}

export default Login