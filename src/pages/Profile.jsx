import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ecommerceUrl from "../services/AxiosURL";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: teal;
  color: #efebe9;
  text-align: center;
`;
const Title = styled.div`
  background-color: black;
  color: #efebe9;
  text-align: center;
`;
const Button = styled.button`
  padding: 5px;
  margin: 0.1rem;
  background-color: black;
  color: white;
  width: 10%;
  cursor: pointer;
`;
const P = styled.p``;
const DetailsContainer = styled.div``;
const Image = styled.img`
  max-height: 25rem;
`;
const InfoContainer = styled.div``;

const Profile = () => {
  const [profile, setProfile] = useState([]);

  const email = sessionStorage.getItem("email");

  useEffect(() => {
    ecommerceUrl.get("SignIn").then((res) => {
      setProfile(res.data);
    });
  }, []);

  const myProfile = profile.filter((signin) => {
    console.log(signin);
    if (signin.email === email) {
      return signin;
    } else {
      return false;
    }
  });

  return (
    <Container>
      <Title><h1>MY PROFILE</h1></Title>
      {myProfile.map((signin) => (
        <DetailsContainer>
          <Image src="https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369" />
          <InfoContainer>
            <P>Name : {signin.fname} {signin.lname}</P>
            <P>Email-Id : {signin.email}</P>
            <P>User-Id : "{signin.id}" </P>
          </InfoContainer>
          <Link to="/CartApp">
            <Button>BACK</Button>
          </Link><br/><br/>
        </DetailsContainer>
      ))}
    </Container>
  );
};

export default Profile;
