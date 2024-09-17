import { css } from "styled-components";
import { colors, spacing } from "./index";

export const responsiveFlexLayout = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.large};
  justify-content: center;

  @media (min-width: 768px) {
    gap: ${spacing.xxlarge};
  }
`;

export const responsiveFontSize = (
  mobileSize: string,
  desktopSize: string
) => css`
  font-size: ${mobileSize};

  @media (min-width: 1024px) {
    font-size: ${desktopSize};
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const primaryButton = css`
  background-color: ${colors.primaryColor};
  color: ${colors.textOnPrimary};

  &:hover {
    background-color: ${colors.primaryColorLight};
  }
`;

export const container = css`
  padding: ${spacing.xlarge} ${spacing.large};
  margin: 0px auto;
  max-width: 1200px;

  @media (min-width: 1024px) {
    padding: ${spacing.xxxlarge};
  }
`;
