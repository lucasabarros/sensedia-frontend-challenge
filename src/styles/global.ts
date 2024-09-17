import { createGlobalStyle, css } from "styled-components";
import { colors, typography, spacing } from "./index";

const responsiveFontSize = (mobileSize: string, desktopSize: string) => css`
  font-size: ${mobileSize};

  @media (min-width: 1024px) {
    font-size: ${desktopSize};
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${typography.body.fontFamily};
    font-size: 1rem;
    margin: 0;
    padding: 0;
    background-color: ${colors.backgroundPrimary};
    
  }

  h1 {
    font-family: ${typography.heading1.fontFamily};
    font-weight: ${typography.heading1.fontWeight};
    ${responsiveFontSize("1.4rem", "1.5rem")};
    color: ${colors.textPrimary};
    margin: ${spacing.medium} 0;
  }

  p {
    ${responsiveFontSize("0.9rem", "1rem")};
    font-family: ${typography.body.fontFamily};
    color: ${colors.textSecondary};
    margin: ${spacing.medium} 0;
    line-height: 1.2rem
  }

  address {
    font-size: ${typography.body};
    font-style: normal;
    margin: ${spacing.xsmall} 0;
    color: ${colors.textSecondary};
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    ${responsiveFontSize("1rem", "1.1rem")};
    font-weight: bold;
    color: ${colors.textPrimary};
    text-align: left;
    padding: ${spacing.small} ${spacing.medium};
    border-bottom: 2px solid ${colors.primaryColor};
  }
  
  td {
    ${responsiveFontSize("0.9rem", "1rem")};
    color: ${colors.textSecondary};
    padding: ${spacing.medium};
    text-align: left;
  }

  tbody {
    tr:nth-child(odd) {
      background-color: ${colors.backgroundPrimary};
    }

    tr:nth-child(even) {
      background-color: ${colors.backgroundSecondary};
    }

    tr:hover {
      background-color: ${colors.backgroundSecondary};
      filter: brightness(0.95);
    }
  }

    button {
      font-family: ${typography.body.fontFamily};
      font-size: 0.9rem;
      font-weight: bold;
      padding: ${spacing.small} ${spacing.medium};
      border: none;
      border-radius: ${spacing.medium};
      cursor: pointer;
    }

    input {
      font-family: ${typography.body.fontFamily};
      border: 1px solid ${colors.primaryColor};
      border-radius: ${spacing.small};
      padding: ${spacing.small};
      width: 100%;
    }
`;
