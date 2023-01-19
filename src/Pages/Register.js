import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ecommerceUrl from "../Axios/AxiosURL";
import Icon from 'react-icons-kit';
import { basic_eye } from 'react-icons-kit/linea/basic_eye';
import { basic_eye_closed } from 'react-icons-kit/linea/basic_eye_closed';
import { arrows_exclamation } from 'react-icons-kit/linea/arrows_exclamation'
import { arrows_circle_check } from 'react-icons-kit/linea/arrows_circle_check'



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
        width: 20%; 
        background-color:white ;
        
`;
const Title = styled.h1`
        font-size:24px;
        font-weight:3000;
`;
const Form = styled.form`
`;
const Input = styled.input`
        flex: 1;
        min-width:92%;
        margin:20px 10px 0px 0px;
        padding: 10px;
`;
const Button = styled.button`
        width: 99%;
        padding:5px;
       
`;

const Register = () => {

        const [fname, fnameChange] = useState("");
        const [lname, lnameChange] = useState("");
        const [email, emailChange] = useState("");
        const [password, passwordChange] = useState("");
        const [type, setType] = useState("password");
        // validated states
        const [lowerValidated, setLowerValidated] = useState(false);
        const [upperValidated, setUpperValidated] = useState(false);
        const [numberValidated, setNumberValidated] = useState(false);
        const [specialValidated, setSpecialValidated] = useState(false);
        const [lengthValidated, setLengthValidated] = useState(false);
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})');

        useEffect(() => {
                if (lower.test(password)) {
                        setLowerValidated(true);
                }
                else {
                        setLowerValidated(false);
                }
                if (upper.test(password)) {
                        setUpperValidated(true);
                }
                else {
                        setUpperValidated(false);
                }
                if (number.test(password)) {
                        setNumberValidated(true);
                }
                else {
                        setNumberValidated(false);
                }
                if (special.test(password)) {
                        setSpecialValidated(true);
                }
                else {
                        setSpecialValidated(false);
                }
                if (length.test(password)) {
                        setLengthValidated(true);
                }
                else {
                        setLengthValidated(false);
                }
        }, [password]);

        const navigate = useNavigate();

        const handleSubmit = (e) => {
                let registerObject = { fname, lname, email, password }
                console.log(registerObject);
                e.preventDefault();
                ecommerceUrl.get("signIn?email=" + email).then((res) => {
                        if (res.data.length === 0) {
                                console.log(res.data)
                                ecommerceUrl.post("SignIn", registerObject).then((res) => {
                                        alert("Registered Successfully");
                                        navigate("/SignIn");
                                }).catch((err) => {
                                        alert("Registration Failed:" + err.message);
                                });
                        }
                        else{
                                alert("Email already exist")
                        }
                })



        }
        return (
                <Container>
                        <Wrapper>
                                <Title>Create an account</Title>
                                <Form onSubmit={handleSubmit}>
                                        <Input value={fname} onChange={e => fnameChange(e.target.value)} type="text" placeholder="First name" required />
                                        <Input value={lname} onChange={e => lnameChange(e.target.value)} type="text" placeholder="Last name" required />
                                        <Input value={email} onChange={e => emailChange(e.target.value)} type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter valid email [abc@mail.com]." required />
                                        <Input value={password} type={type} onChange={e => passwordChange(e.target.value)} placeholder="Password" required />
                                        {type === "password" ? (
                                                <span className='icon-span' onClick={() => setType("text")}>
                                                        <Icon icon={basic_eye_closed} size={18} />
                                                </span>
                                        ) : (
                                                <span className='icon-span' onClick={() => setType("password")}>
                                                        <Icon icon={basic_eye} size={18} />
                                                </span>
                                        )}
                                        {/* validation tracker */}
                                        <main className='tracker-box'>
                                                <div className={lowerValidated ? 'validated' : 'not-validated'}>
                                                        {lowerValidated ? (
                                                                <span className='list-icon green'>
                                                                        <Icon icon={arrows_circle_check} />
                                                                </span>
                                                        ) : (
                                                                <span className='list-icon'>
                                                                        <Icon icon={arrows_exclamation} />
                                                                </span>
                                                        )}
                                                        At least one lowercase letter
                                                </div>
                                                <div className={upperValidated ? 'validated' : 'not-validated'}>
                                                        {upperValidated ? (
                                                                <span className='list-icon green'>
                                                                        <Icon icon={arrows_circle_check} />
                                                                </span>
                                                        ) : (
                                                                <span className='list-icon'>
                                                                        <Icon icon={arrows_exclamation} />
                                                                </span>
                                                        )}
                                                        At least one uppercase letter
                                                </div>
                                                <div className={numberValidated ? 'validated' : 'not-validated'}>
                                                        {numberValidated ? (
                                                                <span className='list-icon green'>
                                                                        <Icon icon={arrows_circle_check} />
                                                                </span>
                                                        ) : (
                                                                <span className='list-icon'>
                                                                        <Icon icon={arrows_exclamation} />
                                                                </span>
                                                        )}
                                                        At least one number
                                                </div>
                                                <div className={specialValidated ? 'validated' : 'not-validated'}>
                                                        {specialValidated ? (
                                                                <span className='list-icon green'>
                                                                        <Icon icon={arrows_circle_check} />
                                                                </span>
                                                        ) : (
                                                                <span className='list-icon'>
                                                                        <Icon icon={arrows_exclamation} />
                                                                </span>
                                                        )}
                                                        At least one special character
                                                </div>
                                                <div className={lengthValidated ? 'validated' : 'not-validated'}>
                                                        {lengthValidated ? (
                                                                <span className='list-icon green'>
                                                                        <Icon icon={arrows_circle_check} />
                                                                </span>
                                                        ) : (
                                                                <span className='list-icon'>
                                                                        <Icon icon={arrows_exclamation} />
                                                                </span>
                                                        )}
                                                        At least 8 characters
                                                </div>
                                        </main>
                                        <Button type="submit">CREATE</Button>
                                        <Link to="/"><Button>BACK</Button></Link>
                                </Form>
                        </Wrapper>
                </Container>
        )
}

export default Register