import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, confirmPassword, username, email } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastStyling);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  const toastStyling = {
    position: "bottom-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (username.length < 3) {
      toast.error("Username should be 3 chars or longer", toastStyling);
      return false;
    } else if (email === "") {
      toast.error("Email is empty, You need to add one.", toastStyling);
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be 8 chars or longer.", toastStyling);
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Passwords are not the same", toastStyling);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>Chat App</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account?
            <Link to="/login"> Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: rgb(20, 19, 24);
  background: linear-gradient(
    3deg,
    rgba(20, 19, 24, 1) 35%,
    rgba(52, 51, 57, 1) 100%
  );
  .brand {
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
      &:focus {
        transition: 0.5s ease-in-out;
        border: 0.1rem solid #ffffff;
        outline: none;
      }
    }
    button {
      background-color: #3f8bfe;
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

export default Register;
