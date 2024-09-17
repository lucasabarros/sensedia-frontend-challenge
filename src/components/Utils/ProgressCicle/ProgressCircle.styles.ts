import styled, { keyframes, css } from "styled-components";
import { flexCenter } from "@styles/index";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinningSVG = styled.svg<{ $isIndeterminate: boolean }>`
  ${({ $isIndeterminate }) =>
    $isIndeterminate &&
    css`
      animation: ${spin} 1s linear infinite;
    `}
`;

export const CenteredContainer = styled.div`
  ${flexCenter}
  width: 100%;
  height: 50vh;
`;
