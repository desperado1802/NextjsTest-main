import React, { useState } from "react";
import {
  Container,
  Header,
  ParagraphOne,
  ParagraphThree,
  ParagraphTwo,
  TextContainer,
} from "./elements";

import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import Diversity3Icon from "@mui/icons-material/Diversity3";

import { IconWrap } from "../../components/IconContainer/elements";

export const TextContentContainer = () => {
  const [clickedContainer, setClickedContainer] = useState("");

  console.log(clickedContainer);

  const TextData = [
    {
      header: "Brief",
      paragraphOne: "Complete ",
      paragraphTwo: "brief writing or simple guidance ",
      paragraphThree: "on what to include, we've got you covered.",
      icon: <DesignServicesIcon style={{ fontSize: "50px" }} />,
    },
    {
      header: "Search",
      paragraphOne: "In-depth agency search covering; ",
      paragraphTwo: "criteria matching, ",
      paragraphThree: "door knocking and due-diligence vetting.",
      icon: <ScreenSearchDesktopIcon style={{ fontSize: "50px" }} />,
    },
    {
      header: "Pitch",
      paragraphOne: "Comprehensive ",
      paragraphTwo: "pitch management, ",
      paragraphThree: "including comms, diary management and pitch hosting.",
      icon: <Diversity3Icon style={{ fontSize: "50px" }} />,
    },
  ];

  const linkToBrief = () => {
    window.open("https://goodbrief.io/", "_blank");
  };

  return (
    <>
      {TextData.map((item, idx) => (
        <Container
          key={idx}
          style={
            clickedContainer === item.header
              ? {
                  border: "2px solid rgba(170,207,254,255)",
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
          <IconWrap>{item.icon}</IconWrap>
          <TextContainer>
            <Header
              style={
                clickedContainer === item.header
                  ? {
                      color: "rgba(170,207,254,255)",
                      textDecoration: "underline",
                    }
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
    </>
  );
};
