import React, { memo } from "react";
import { UserCardProps } from "./UserCard.types";
import { Card, UserName, UserInfo, IconWrapper } from "./UserCard.styles";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";

export const UserCard: React.FC<UserCardProps> = memo(({ user }) => {
  return (
    <Card data-testid="user-card" role="region" aria-labelledby="user-name">
      <IconWrapper>
        <FiUser size={48} aria-label="Ícone de usuário" aria-hidden="true" />
      </IconWrapper>

      <UserName id="user-name" data-testid="user-name">
        {user.name}
      </UserName>

      <UserInfo>
        <IconWrapper>
          <FiMail aria-label="Ícone de e-mail" aria-hidden="true" />
        </IconWrapper>
        <span data-testid="user-email">{user.email}</span>
      </UserInfo>

      <UserInfo>
        <IconWrapper>
          <FiPhone aria-label="Ícone de telefone" aria-hidden="true" />
        </IconWrapper>
        <span data-testid="user-phone">{user.phone}</span>
      </UserInfo>
    </Card>
  );
});
