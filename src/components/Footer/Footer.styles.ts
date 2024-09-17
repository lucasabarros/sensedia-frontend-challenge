import styled from "styled-components";
import { colors, spacing } from "@styles/index";

export const FooterContainer = styled.footer`
  background-color: ${colors.primaryColor};
  text-align: center;
  padding: ${spacing.medium};
`;

export const FooterText = styled.p`
  color: ${colors.textOnPrimary};
  margin: 0;
`;
