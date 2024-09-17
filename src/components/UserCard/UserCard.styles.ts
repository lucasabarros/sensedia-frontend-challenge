import styled from "styled-components";
import { colors, flexCenter, spacing, responsiveFontSize } from "@styles/index";

export const Card = styled.div`
  ${flexCenter}
  flex-direction: column;
  text-align: center;
  padding: ${spacing.medium};
  border-radius: ${spacing.medium};
  background-color: ${colors.backgroundPrimary};
  box-shadow: 0 4px 8px rgba(11, 31, 77, 0.14);
  width: 100%;
  min-height: 180px;

  @media all and (min-width: 768px) {
    max-width: 300px;
  }
`;

export const UserName = styled.span`
  ${responsiveFontSize("1.2rem", "1.3rem")};
  font-weight: bold;
  color: ${colors.textPrimary};
  margin: ${spacing.small} 0 ${spacing.medium} 0;
`;

export const UserInfo = styled.address`
  ${flexCenter}
  gap: ${spacing.small};
`;

export const IconWrapper = styled.div`
  ${flexCenter};
  font-size: 1.2rem;
  color: ${colors.primaryColor};
`;
