import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Contacts({ contacts, currentUser }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.usename);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {};

  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h3>React Chat App</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;based64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;based64,${currentUserName}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h1>{currentUserName}</h1>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
