import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  StyledBackgroundContainer,
  Headerr,
  StyledHeaderContainer,
  StyledHeader,
  ContentsContainer,
  BodyContainer,
  HeadingContainer,
  Header,
  Paragraph,
} from "./elements";

import { TextContentContainer } from "../../collections/TextContentContainer/TextContentContainer";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
  return (
    <BodyContainer>
      <HeadingContainer>
        <Header>{title}</Header>
        <Paragraph>{description}</Paragraph>
      </HeadingContainer>
      <StyledBackgroundContainer src={"./background.png"}>
        <StyledImageContainer>
          <Image
            // layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <ContentsContainer>
          <TextContentContainer />
        </ContentsContainer>
      </StyledBackgroundContainer>
    </BodyContainer>
  );
};
