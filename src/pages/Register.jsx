import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ecommerceUrl from "../services/AxiosURL";
import Icon from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
import {
  showErrorMessage,
  showRegisterSuccess,
  showRegisterFailed,
} from "../services/Toastify";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/assets/images/register.jpg");
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 3000;
`;
const Form = styled.form``;
const Input = styled.input`
  flex: 1;
  min-width: 92%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  padding: 5px;
  margin: 0.1rem;
  background-color: teal;
  color: white;
  width: 100%;
  cursor: pointer;
`;
const IconSpan = styled.div`
  float: right;
  color: greenyellow;
  cursor: pointer;
`;
const TrackerBox = styled.main`
  background-color: #386489;
  font-size: 14px;
  color: white;
  letter-spacing: 0.09em;
  padding: 15px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Validation = styled.div`
  color: rgba(255, 255, 255, 0.5);
`;
const ListIconGreen = styled.span`
  color: rgb(46, 243, 46);
`;
const ListIcon = styled.span`
  margin-right: 8px;
`;

const Register = () => {
  const [fname, fnameChange] = useState("");
  const [lname, lnameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [type, setType] = useState("password");
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  useEffect(() => {
    if (lower.test(password)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(password)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(password)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(password)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(password)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    } // eslint-disable-next-line
  }, [password]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let registerObject = { fname, lname, email, password };
    console.log(registerObject);
    e.preventDefault();
    ecommerceUrl.get("signIn?email=" + email).then((res) => {
      if (res.data.length === 0) {
        console.log(res.data);
        ecommerceUrl
          .post("SignIn", registerObject)
          .then((res) => {
            showRegisterSuccess();
            navigate("/SignIn");
          })
          .catch(() => {
            showRegisterFailed();
          });
      } else {
        showErrorMessage();
      }
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            value={fname}
            onChange={(e) => fnameChange(e.target.value)}
            type="text"
            placeholder="First name"
            data-testid="reg-fname-test"
            required
          />
          <Input
            value={lname}
            onChange={(e) => lnameChange(e.target.value)}
            type="text"
            placeholder="Last name"
            data-testid="reg-lname-test"
            required
          />
          <Input
            value={email}
            onChange={(e) => emailChange(e.target.value)}
            type="email"
            placeholder="Email"
            data-testid="reg-email-test"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter valid email [abc@mail.com]."
            required
          />
          <Input
            value={password}
            type={type}
            onChange={(e) => passwordChange(e.target.value)}
            placeholder="Password"
            data-testid="reg-password-test"
            required
          />
          {type === "password" ? (
            <IconSpan onClick={() => setType("text")}>
              <Icon icon={basic_eye_closed} size={18} />
            </IconSpan>
          ) : (
            <IconSpan onClick={() => setType("password")}>
              <Icon icon={basic_eye} size={18} />
            </IconSpan>
          )}
          <TrackerBox>
            <Validation>
              {lowerValidated ? (
                <ListIconGreen>
                  <Icon icon={arrows_circle_check} />
                </ListIconGreen>
              ) : (
                <ListIcon>
                  <Icon icon={arrows_exclamation} />
                </ListIcon>
              )}
              At least one lowercase letter
            </Validation>
            <Validation>
              {upperValidated ? (
                <ListIconGreen>
                  <Icon icon={arrows_circle_check} />
                </ListIconGreen>
              ) : (
                <ListIcon>
                  <Icon icon={arrows_exclamation} />
                </ListIcon>
              )}
              At least one uppercase letter
            </Validation>
            <Validation>
              {numberValidated ? (
                <ListIconGreen>
                  <Icon icon={arrows_circle_check} />
                </ListIconGreen>
              ) : (
                <ListIcon>
                  <Icon icon={arrows_exclamation} />
                </ListIcon>
              )}
              At least one number
            </Validation>
            <Validation>
              {specialValidated ? (
                <ListIconGreen>
                  <Icon icon={arrows_circle_check} />
                </ListIconGreen>
              ) : (
                <ListIcon>
                  <Icon icon={arrows_exclamation} />
                </ListIcon>
              )}
              At least one special character
            </Validation>
            <Validation>
              {lengthValidated ? (
                <ListIconGreen>
                  <Icon icon={arrows_circle_check} />
                </ListIconGreen>
              ) : (
                <ListIcon>
                  <Icon icon={arrows_exclamation} />
                </ListIcon>
              )}
              At least 8 characters
            </Validation>
          </TrackerBox>
          <Button type="submit" data-testid="create-button-test">CREATE</Button>
          <Link to="/">
            <Button data-testid="back-button-test">BACK</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
