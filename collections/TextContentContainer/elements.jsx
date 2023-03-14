import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 10px;
  height: 130px;
  width: 450px;
  background-color: rgba(241, 241, 241, 255);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ddd;
  }
`;

export const TextContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.h4`
  font-weight: 600;
  font-family: Poppins;
  margin: 0;
`;

export const ParagraphOne = styled.p`
  font-family: Poppins;
  display: inline;
`;

export const ParagraphTwo = styled.p`
  font-family: Poppins;
  font-weight: 600;
  display: inline;
`;

export const ParagraphThree = styled.p`
  font-family: Poppins;
  display: inline;
`;
