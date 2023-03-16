import Image from "next/image";

import {
  StyledImageContainer,
  StyledBackgroundContainer,
  ContentsContainer,
  BodyContainer,
  HeadingContainer,
  StyledTextContentContainer,
  StyledMainHeader,
  StyledDescription,
  Header,
  Paragraph,
  //Not used code from the previous project
  // StyledTextContainer,
  // StyledContainer,
  // StyledGetStartedBtn,
  // StyledTitle,
  // StyledDescription,
  // StyledCTAContainer,
} from "./elements";

export const Section = ({
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
        <StyledMainHeader>{title}</StyledMainHeader>
        <StyledDescription>{description}</StyledDescription>
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
