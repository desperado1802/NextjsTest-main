import { forwardRef } from "react";
import styled from "styled-components";

export const StyledHeader = styled(
  forwardRef((props, ref) => <h4 {...props} ref={ref} />)
)`
  font-weight: 600;
  font-family: Poppins;
  transition: 0.3s ease-in-out;
`;

export const StyledParagraphOne = styled(
  forwardRef((props, ref) => <p {...props} ref={ref} />)
)`
  font-family: Poppins;
  @media (max-width: 1023px) {
    font-size: 0.93rem;
  }
`;

export const StyledParagraphTwo = styled(
  forwardRef((props, ref) => <p {...props} ref={ref} />)
)`
  font-family: Poppins;
  font-weight: 600;

  @media (max-width: 1023px) {
    font-size: 0.93rem;
  }
`;

export const StyledHeaderMain = styled(
  forwardRef((props, ref) => <h1 {...props} ref={ref} />)
)`
  font-family: Poppins;
  font-size: 2rem;
  line-height: 1rem;
  font-weight: 600;
`;

export const StyledDescription = styled(
  forwardRef((props, ref) => <p {...props} ref={ref} />)
)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1rem;
`;
