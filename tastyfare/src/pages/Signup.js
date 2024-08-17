//import { Alert } from 'bootstrap';
import {React,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Signup() {
    const [credentials,setcredentials]=useState({name:"",email:"",password:"",location:""})
    const HandleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/Createuser",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email,location:credentials.location,password:credentials.password})
        })
        const json=await response.json()
        console.log(json)
        if(!json.success)
        alert("Enter valid Credentials")
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
        <>
            <div className='container'>
                <Form onSubmit={HandleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name='name' value={credentials.name} onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Location" name='location' value={credentials.location } onChange={onChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}
