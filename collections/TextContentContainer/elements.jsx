import styled from "styled-components";

import { Headers, ParagraphOne, ParagraphTwo } from "~/components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 30px;

  @media (max-width: 1023px) {
    padding-top: 30px;
  }
`;

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

export const StyledCardHeader = styled((props) => <Headers {...props} />)`
  margin: 0;
`;

export const StyledCardParagraphOne = styled((props) => (
  <ParagraphOne {...props} />
))`
  display: inline;
`;

export const StyledCardParagraphTwo = styled((props) => (
  <ParagraphTwo {...props} />
))`
  display: inline;
`;
