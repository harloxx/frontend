import React,{useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const SignupForm = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck]=useState("")
    const navigate = useNavigate();
 
    const navigateToLogin= () => {
        navigate("/login");
    };
    const onIdChangeHandler=(e)=>{
        setId(e.target.value);
    }
    const onPwdChangeHandler=(e)=>{
        setPassword(e.target.value);
    }
    const onPwdCheckCangeHandler=(e)=>{
        setPasswordCheck(e.target.value);
    }


    const signupMember =()=>{
        if (password !== passwordCheck) {
            alert('패스워드가 일치하지 않습니다.')
            setPasswordCheck("")
        }
        else if (!password || !passwordCheck || !id){
            alert("모든 칸을 입력해 주세요")
        }
        else{
            axios.post('/register',{
                id:id,
                pwd:password
            }).then(function (response) {
                console.log(response)
                alert('회원가입에 성공하였습니다.')
                navigateToLogin()

            }).catch(function (error) {
                alert("아이디가 중복됩니다. 다른 아이디를 사용해 주세요.")
                console.log(error);
            });
        }
        
    }
    useEffect(() => {
        axios.get('/memberlist')
        .then(res=>{
            console.log(res.data)
        })
      }, [])

    return (
        <div>
           
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Create your account
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
                 <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Confirm Password'
                    type='password'
                    value ={passwordCheck} onChange={onPwdCheckCangeHandler}
                />

                <Button color='teal' fluid size='large' onClick={()=>{
                    signupMember()
                }}>
                    Sign Up
                </Button>
                </Segment>
            </Form>
            
            </Grid.Column>
        </Grid>
        </div>
    )
}

export default SignupForm;