import React, { useState } from "react";
import {
  Container,
  Header,
  ParagraphOne,
  ParagraphThree,
  ParagraphTwo,
  TextContainer,
} from "./elements";

export const TextContentContainer = () => {
  const [clickedContainer, setClickedContainer] = useState("");

  console.log(clickedContainer);

  const TextData = [
    {
      header: "Brief",
      paragraphOne: "Complete ",
      paragraphTwo: "brief writing or simple guidance ",
      paragraphThree: "on what to include, we've got you covered.",
    },
    {
      header: "Search",
      paragraphOne: "In-depth agency search covering; ",
      paragraphTwo: "criteria matching, ",
      paragraphThree: "door knocking and due-diligence vetting.",
    },
    {
      header: "Pitch",
      paragraphOne: "Comprehensive ",
      paragraphTwo: "pitch management, ",
      paragraphThree: "including comms, diary management and pitch hosting.",
    },
  ];

  const linkToBrief = () => {
    window.open("https://goodbrief.io/", "_blank");
  };

  return (
    <>
      {TextData.map((item, idx) => (
        <Container
          style={
            clickedContainer === item.header
              ? {
                  border: "2px solid blue",
                  width: idx === 0 ? "390px" : idx === 1 ? "420px" : "450px",
                }
              : {
                  border: "2px solid transparent",
                  width: idx === 0 ? "390px" : idx === 1 ? "420px" : "450px",
                }
          }
          onClick={(event) => {
            if (item.header === "Brief") {
              linkToBrief();
            }
            setClickedContainer(item.header);
          }}
        >
          <TextContainer>
            <Header
              style={
                clickedContainer === item.header
                  ? { color: "blue", textDecoration: "underline" }
                  : { color: "black" }
              }
            >
              {item.header}
            </Header>
            <ParagraphOne>{item.paragraphOne} </ParagraphOne>
            <ParagraphTwo>{item.paragraphTwo}</ParagraphTwo>
            <ParagraphThree>{item.paragraphThree}</ParagraphThree>
          </TextContainer>
        </Container>
      ))}

      {/* <Container>
        <TextContainer>
          <Header>Brief</Header>
          <ParagraphOne>Complete </ParagraphOne>
          <ParagraphTwo>brief writing or simple guidance </ParagraphTwo>
          <ParagraphThree>
            on what to include, we've got you covered
          </ParagraphThree>
        </TextContainer>
      </Container>
      <Container>
        <TextContainer>
          <Header>Brief</Header>
          <ParagraphOne>Complete </ParagraphOne>
          <ParagraphTwo>brief writing or simple guidance </ParagraphTwo>
          <ParagraphThree>
            on what to include, we've got you covered
          </ParagraphThree>
        </TextContainer>
      </Container> */}
    </>
  );
};
