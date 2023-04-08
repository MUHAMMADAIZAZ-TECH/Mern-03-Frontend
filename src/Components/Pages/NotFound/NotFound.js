import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NotFoundPage = () => {
  return (
    <Container>
      <Heading>Oops! Page not found.</Heading>
      <Paragraph>
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </Paragraph>
      <Button to="/">Go back to homepage</Button>
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 24px;
  background-color: #f5f5f5;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: #333333;
`;

const Paragraph = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 32px;
  color: #666666;
`;

const Button = styled(Link)`
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
  background-color: #0077cc;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #005ea6;
  }
`;
