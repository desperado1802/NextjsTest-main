import Image from "next/image";

import {
  StyledImageContainer,
  StyledBackgroundContainer,
  ContentsContainer,
  BodyContainer,
  HeadingContainer,
  Header,
  Paragraph,
  StyledTextContentContainer,
  //Not used code from the previous project
  // StyledTextContainer,
  // StyledContainer,
  // StyledGetStartedBtn,
  // StyledTitle,
  // StyledDescription,
  // StyledCTAContainer,
} from "./elements";

export const Hero = ({
  image,
  backgroundImage,
  title,
  description,
  ctaText,
  ...props
}) => {
  return (
    <BodyContainer>
      <HeadingContainer>
        <Header>{title}</Header>
        <Paragraph>{description}</Paragraph>
      </HeadingContainer>

      <StyledBackgroundContainer src={backgroundImage.src}>
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
          <StyledTextContentContainer />
        </ContentsContainer>
      </StyledBackgroundContainer>
    </BodyContainer>
  );
};
