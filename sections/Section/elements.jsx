import styled from "styled-components";
import { TextContentContainer } from "~/collections";

// Not used code from the previous project
import {
  // Button,
  // SectionContainer,
  // SectionBigHeading,
  // SectionSubheading,
  MainHeader,
  Description,
} from "~/components";

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 450px;
  height: 100%;
  // background-color: yellow;
  display: flex;
  justify-content: center;

  & > span {
    cursor: pointer;
  }

  @media (max-width: 1023px) {
    width: 250px;
  }

  @media (max-width: 420px) {
    width: 220px;
  }
`;

/*My code */

export const BodyContainer = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeadingContainer = styled.div`
  width: 100%;
  text-align: center;

  @media (max-width: 1023px) {
    margin-top: 10px;
  }
`;

export const StyledMainHeader = styled((props) => <MainHeader {...props} />)`
  margin: 0;
  white-space: nowrap;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const StyledDescription = styled((props) => <Description {...props} />)`
  font-weight: 400;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const StyledBackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  max-width: 1254px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;

  @media (max-width: 1023px) {
    flex-direction: column;
    background-size: contain;
    height: 100%;
    width: 100%;
  }
`;

export const ContentsContainer = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  @media (max-width: 1023px) {
    width: 400px;
    margin-top: 15px;
  }

  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 350px;
    padding: 10px;
    margin-top: 5px;
  }
`;

export const StyledTextContentContainer = styled(TextContentContainer)`
  display: block;
`;

// export const Header = styled.h1`
//   font-family: Poppins;
//   font-size: 2rem;
//   line-height: 1rem;
//   font-weight: 600;
//   margin: 0;
//   white-space: nowrap;

//   @media (max-width: 500px) {
//     font-size: 1.5rem;
//   }
// `;

// export const Paragraph = styled.p`
//   font-family: Poppins;
//   font-size: 1rem;
//   line-height: 1rem;
//   font-weight: 400;

//   @media (max-width: 500px) {
//     font-size: 0.8rem;
//   }
// `;

//Not used code from the previous project

// export const StyledGetStartedBtn = styled((props) => (
//   <Button {...props} variant="contained" color="main" />
// ))`
//   margin-top: 4.375rem;
//   padding-top: 0;
//   padding-bottom: 0;
// `;

// export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
//   margin: 0;
//   color: black;
// `;

// export const StyledDescription = styled((props) => (
//   <SectionSubheading {...props} />
// ))`
//   margin: 1.563rem 0 0;
// `;

// export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
//   color: black;
//   width: 30%;
//   margin-left: 11.125rem;
//   font-family: sans-serif;
// `;

// export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
//   display: flex;
// `;
