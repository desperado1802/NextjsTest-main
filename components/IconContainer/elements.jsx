import { forwardRef } from "react";
import styled from "styled-components";

export const IconWrap = styled(
  forwardRef((props, ref) => <div {...props} ref={ref} />)
)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: black;
  text-align: center;
`;
