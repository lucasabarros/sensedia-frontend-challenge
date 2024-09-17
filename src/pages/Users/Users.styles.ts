import styled from "styled-components";
import {
  container,
  flexCenter,
  primaryButton,
  responsiveFlexLayout,
  spacing,
} from "@styles/index";
import { Button } from "react-aria-components";

export const Container = styled.div`
  ${container}
`;

export const CardContainer = styled.div`
  ${responsiveFlexLayout};
`;

export const StyledButtonWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  gap: ${spacing.xlarge};
  margin: ${spacing.xlarge} 0;

  @media all and (min-width: 1024px) {
    flex-direction: row;
    margin: ${spacing.xxxlarge} 0;
    width: 100%;
  }
`;

export const StyledButton = styled(Button)`
  ${primaryButton};
  width: 100%;

  @media all and (min-width: 1024px) {
    width: fit-content;
    flex-shrink: 0;
  }
`;
