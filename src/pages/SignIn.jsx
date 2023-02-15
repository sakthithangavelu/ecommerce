import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ecommerceUrl from "../services/AxiosURL";
import { toast } from "react-toastify";

import {
  showEmailError,
  showPasswordError,
  showLoginError,
  showPassError,
  showUsernameError,
  showAdminSuccess,
} from "../services/Toastify";

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

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const showUserSuccess = () => {
    toast.success(`Signed In as-${email}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

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
            if (resp[0].password === "Admin@123") {
              sessionStorage.setItem("email", email);
              showAdminSuccess();
              navigate("/AdminHome");
            } else {
              if (resp[0].password === password) {
                sessionStorage.setItem("email", email);
                showUserSuccess();
                navigate("/CartApp");
              } else {
                showPasswordError();
              }
            }
          }
        })
        .catch(() => {
          showLoginError();
        });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      showUsernameError();
    }
    if (password === "" || password === null) {
      result = false;
      showPassError();
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
            data-testid="email-test"
            required
          /> 
          <Input
            value={password}
            onChange={(e) => passwordChange(e.target.value)}
            type="password"
            placeholder="Password"
            data-testid="password-test"
            required
          />
          <Button onSubmit={Signin} type="submit" data-testid="SignIn-button-test">
            SIGN IN
          </Button>
          <Link to="/Register">
            <Button data-testid="newuser-button-test">NEW USER?</Button>
          </Link>
          <Link to="/">
            <Button data-testid="signin-back-button-test">BACK</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
