import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [credentials,setcredentials]=useState({email:"",password:""})
  let navigate=useNavigate()
    const HandleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/login",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({ email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        console.log(json)
        if(!json.success)
        alert("Enter valid Credentials")
      if(json.success){
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate('/')
      }
        
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handleSignUp=()=>{
      navigate('/createuser')
    }
  return (
    <>
      <div className='container'>
                <Form onSubmit={HandleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button 
                        variant="secondary" 
                        onClick={handleSignUp} 
                        className="ms-2" // Optional: adds some space between the buttons
                    >I'm new user</Button>
                </Form>
            </div>
    </>
  )
}

export default Login
