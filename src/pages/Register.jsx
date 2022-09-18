import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("https://i.ibb.co/s2ZGr57/pexels-pixabay-51119.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: orange;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;
const Form = styled.form`

`;
const Input = styled.input`

`;
const Agreement = styled.span`

`;
const Button = styled.div`

`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
            <Title>Create An account </Title>
            <Form>
                <Input placeholder= "name" />
                <Input placeholder= "last name" />
                <Input placeholder= "username" />
                <Input placeholder= "email" />
                <Input placeholder= "password" />
                <Input placeholder= "confirm password" />
                <Agreement>
                    By creating an account to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>


            </Wrapper>

        </Container>
    )
}

export default Register
