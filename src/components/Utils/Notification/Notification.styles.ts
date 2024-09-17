import styled from "styled-components";
import { NotificationStyleProps } from "./Notification.types";
import { colors, responsiveFontSize, spacing } from "@styles/index";

export const NotificationContainer = styled.div<NotificationStyleProps>`
  position: fixed;
  top: 80px;
  right: ${spacing.large};
  background-color: ${({ type }) =>
    type === "success" ? colors.successColor : colors.errorColor};
  color: ${colors.textOnPrimary};
  padding: ${spacing.small} ${spacing.medium};
  border-radius: ${spacing.small};
  z-index: 1000;
  ${responsiveFontSize("0.8rem", "1rem")};

  @media (min-width: 1024px) {
    padding: ${spacing.medium};
  }
`;
