import styled from "styled-components";
import { Column } from "react-aria-components";

export const TableWrapper = styled.section`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;

export const HeaderColumn = styled(Column)`
  min-width: 200px;
`;
