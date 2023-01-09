import styled from "styled-components";


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
        width: 40%;
        border:none;
        padding:15px 20px;
        background-color:teal;
        color:white;
        cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder="First name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="User name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>
                <Agreement>By Creating an account ,I consent to the processing of my personal 
                data in accordance with the <b>Privacy Policy</b>
                </Agreement>
                <Button>CREATE</Button>
           </Form>
        </Wrapper>
    </Container>
  )
}

export default Register