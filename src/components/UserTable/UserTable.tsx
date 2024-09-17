import React, { memo } from "react";
import { UserTableProps } from "./UserTable.types";
import { TableWrapper, HeaderColumn } from "./UserTable.styles";
import {
  Table,
  TableBody,
  TableHeader,
  Row,
  Cell,
} from "react-aria-components";

export const UserTable: React.FC<UserTableProps> = memo(({ users }) => {
  return (
    <TableWrapper>
      <Table
        aria-label="Tabela de usuários"
        selectionMode="none"
        data-testid="user-table">
        <TableHeader>
          <HeaderColumn isRowHeader aria-sort="none" data-testid="header-name">
            Nome
          </HeaderColumn>
          <HeaderColumn isRowHeader aria-sort="none" data-testid="header-email">
            Email
          </HeaderColumn>
          <HeaderColumn isRowHeader aria-sort="none" data-testid="header-phone">
            Telefone
          </HeaderColumn>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <Row key={user.id} data-testid={`row-${user.id}`}>
              <Cell data-testid={`cell-name-${user.id}`}>{user.name}</Cell>
              <Cell data-testid={`cell-email-${user.id}`}>{user.email}</Cell>
              <Cell data-testid={`cell-phone-${user.id}`}>{user.phone}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
});
