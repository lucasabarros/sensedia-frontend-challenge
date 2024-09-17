import { colors, flexCenter, responsiveFontSize } from "@styles/index";
import styled from "styled-components";

export const Message = styled.div`
  ${responsiveFontSize("1.2rem", "1.3rem")};
  color: ${colors.textSecondary};
  ${flexCenter};
  width: 100%;
  height: 30vh;
`;
