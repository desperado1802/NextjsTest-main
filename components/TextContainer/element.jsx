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
