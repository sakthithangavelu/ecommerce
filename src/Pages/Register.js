import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background:url("https://wallpaperaccess.com/full/2076146.jpg")center;
        display: flex;
        background-size: cover;
        align-items: center;
        justify-content:center;
`;
const Wrapper = styled.div`
        padding: 20px;
        width: 40%; 
        background-color:white ;
`;
const Title = styled.h1`
        font-size:24px;
        font-weight:3000;
`;
const Form = styled.form`
        display:flex;
        flex-wrap:wrap;

`;
const Input = styled.input`
        flex: 1;
        min-width:40%;
        margin:20px 10px 0px 0px;
        padding: 10px;
`;
const Agreement = styled.span`
        font-size:12px;
        margin:20px 0px;
`;
const Button = styled.button`
        width: 100%;
        border:none;
        padding:15px 20px;
        background-color:teal;
        color:white;
        cursor: pointer;
`;

const Register = () => {

const[fname,fnameChange]=useState("");
const[lname,lnameChange]=useState("");
const[email,emailChange]=useState("");
const[password,passwordChange]=useState("");

const navigate=useNavigate();
        
const handleSubmit=(e) => {
let registerObject = {fname,lname,email,password}
console.log(registerObject);
e.preventDefault();

        axios.post("http://localhost:8000/SignIn",registerObject).then((res)=>{
                alert("Registered Successfully");
                navigate("/SignIn");
        }).catch((err)=>{
                alert("Registration Failed:"+err.message);
        });
}      
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form onSubmit={handleSubmit}>
                <Input value={fname} onChange={e=>fnameChange(e.target.value)} type="text" placeholder="First name" required/>
                <Input value={lname} onChange={e=>lnameChange(e.target.value)}  type="text" placeholder="Last name" required/>
                <Input value={email} onChange={e=>emailChange(e.target.value)} type="email" placeholder="Email" required/>
                <Input value={password} onChange={e=>passwordChange(e.target.value)} type="password" placeholder="Password" required/>
                <Agreement>By Creating an account ,I consent to the processing of my personal 
                data in accordance with the <b>Privacy Policy</b>.
                </Agreement>
                <Button type="submit">CREATE</Button>
           </Form>
        </Wrapper>
    </Container>
  )
}

export default Register