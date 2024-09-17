import styled from "styled-components";
import { colors, spacing, flexCenter } from "@styles/index";

export const HeaderContainer = styled.header`
  ${flexCenter}
  gap: ${spacing.medium};
  border-bottom: 0.5px solid ${colors.primaryColor};
  padding: ${spacing.medium} 0;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;
