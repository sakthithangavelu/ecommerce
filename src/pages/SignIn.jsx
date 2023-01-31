import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ecommerceUrl from "../axios/AxiosURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/assets/images/register.jpg") center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 3000;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 92%;
  margin: 20px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 100%;
  padding: 5px;
  margin: 0.1rem;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const SignIn = () => {
        const [email, emailChange] = useState("");
        const [password, passwordChange] = useState("");

        const navigate = useNavigate();

        const showEmailError = () => {
                toast.error("Invalid Email!", {
                        position: toast.POSITION.TOP_CENTER,
                });
        };

        const showPasswordError = () => {
                toast.error("Invalid Password!", {
                        position: toast.POSITION.TOP_CENTER,
                });
        };

        useEffect(() => {
                sessionStorage.clear();
        }, []);

        const ProceedLogin = (e) => {
                if (validate()) {
                        e.preventDefault();
                        ecommerceUrl
                                .get("SignIn?email=" + email)
                                .then((res) => {
                                        console.log(res.data);
                                        return res.data;
                                })
                                .then((resp) => {
                                        console.log(resp);
                                        if (Object.keys(resp).length === 0) {
                                                showEmailError();
                                        } else {
                                                if (resp[0].password === password) {
                                                        sessionStorage.setItem("email", email);
                                                        navigate("/CartApp");
                                                } else {
                                                        showPasswordError();
                                                }
                                        }
                                })
                                .catch((err) => {
                                        alert("Login Failed:" + err.message);
                                });
                }
        };
        
        const validate = () => {
                let result = true;
                if (email === "" || email === null) {
                        result = false;
                        alert("Invalid Username");
                }
                if (password === "" || password === null) {
                        result = false;
                        alert("Invalid Password");
                }
                return result;
        };

        const Signin = () => {
                navigate("/CartApp");
        };

        return (
                <Container>
                        <Wrapper>
                                <Title>SIGN IN</Title>
                                <Form onSubmit={ProceedLogin}>
                                        <Input
                                                value={email}
                                                onChange={(e) => emailChange(e.target.value)}
                                                type="email"
                                                placeholder="Email"
                                                required
                                        />
                                        <Input
                                                value={password}
                                                onChange={(e) => passwordChange(e.target.value)}
                                                type="password"
                                                placeholder="Password"
                                                required
                                        />
                                        <Button onSubmit={Signin} type="submit">
                                                SIGN IN
                                        </Button>
                                        <Link to="/Register">
                                                <Button>NEW USER?</Button>
                                        </Link>
                                        <Link to="/">
                                                <Button>BACK</Button>
                                        </Link>
                                </Form>
                        </Wrapper>
                        <ToastContainer />
                </Container>
        );
};

export default SignIn;
