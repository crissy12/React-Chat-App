import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Logo from "../assets/logo.png"

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("form");
    };
    const handleChange = (event) => {};
  return (
    <>
    <FormContainer>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="brand">
                <img src={Logo} alt="Logo" />
                <h1>Chat App</h1>
            </div>
            <input type="text" placeholder='Username' name='username' onChange={e=>handleChange(e)} />
            <input type="email" placeholder='Email' name='email' onChange={e=>handleChange(e)} />
            <input type="password" placeholder='Password' name='password' onChange={e=>handleChange(e)} />
            <input type="password" placeholder='Confirm Password' name='ConfirmPassword' onChange={e=>handleChange(e)} />
            <button type="submit">Create User</button>
            <span>
                Already have an account? 
                <Link to="/login"> Login</Link>
            </span>
        </form>
    </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
height: 100vh;
width:100vw;
display:flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background: rgb(20,19,24);
background: linear-gradient(3deg, rgba(20,19,24,1) 35%, rgba(52,51,57,1) 100%);
.brand{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
        height: 7rem;
    }
    h1 {
        color: white;
        text-transform: uppercase;
    }
}
form {
        animation-duration: 3s;
        animation-name: slidein;
        animation-iteration-count: 1;
        transition: 0.1s ease-in-out;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #222428;
        border-radius: 2rem;
        border: 0.1rem solid #3a3a3a;
        padding: 3rem 5rem;

        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #494c53;
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
            transition: 0.2s ease-in-out;
            &:focus{
                transition: 0.5s ease-in-out;
                border: 0.1rem solid #ffffff;
                outline: none;
            }

        }
        button {
            background-color: #3F8BFE;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.5s ease-in-out; 
            &:hover {
                background-color: #1371fd;
            }
        }
        span {
            color: white;
            text-transform: uppercase;
            a {
                color: white;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }

@keyframes slidein {
    from {
        transform: translateX(150vw);
    }

    to {
        transform: translateX(0);
}
}
`;

export default Register