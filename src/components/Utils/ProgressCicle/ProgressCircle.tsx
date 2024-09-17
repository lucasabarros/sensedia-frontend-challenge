import React from "react";
import { ProgressBar } from "react-aria-components";
import { ProgressCircleProps } from "./ProgressCircle.types";
import { CenteredContainer, SpinningSVG } from "./ProgressCircle.styles";
import {
  CENTER,
  STROKE_WIDTH,
  RADIUS,
  CIRCUMFERENCE,
} from "./ProgressCircle.constants";
import { colors } from "@styles/index";

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  value,
  isIndeterminate = false,
}) => {
  return (
    <CenteredContainer>
      <ProgressBar
        value={value}
        isIndeterminate={isIndeterminate}
        aria-label="Loading...">
        {({ percentage = 0 }) => (
          <SpinningSVG
            width={64}
            height={64}
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth={STROKE_WIDTH}
            $isIndeterminate={isIndeterminate}>
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS - (STROKE_WIDTH / 2 - 0.25)}
              stroke={colors.primaryColorLight}
              strokeWidth={0.5}
            />
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS + (STROKE_WIDTH / 2 - 0.25)}
              stroke={colors.primaryColorLight}
              strokeWidth={0.5}
            />
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              stroke={colors.primaryColor}
              strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
              strokeDashoffset={
                isIndeterminate
                  ? CIRCUMFERENCE * 0.75
                  : CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE
              }
              strokeLinecap="round"
              transform="rotate(-90 16 16)"
            />
          </SpinningSVG>
        )}
      </ProgressBar>
    </CenteredContainer>
  );
};
