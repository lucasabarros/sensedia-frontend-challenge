import React from "react";
import { useUsers } from "./Users.hooks";
import { UserCard } from "@components/UserCard/UserCard";
import { UserTable } from "@components/UserTable/UserTable";
import { ProgressCircle } from "@components/Utils/ProgressCicle/ProgressCircle";
import { NoResults } from "@components/Utils/NoResults/NoResults";
import { Filter } from "@components/Filter/Filter";
import { Notification } from "@components/Utils/Notification/Notification";
import {
  Container,
  CardContainer,
  StyledButtonWrapper,
  StyledButton,
} from "./Users.styles";
import { VIEW_SWITCH_TEXT } from "./Users.constants";

export const Users: React.FC = () => {
  const {
    view,
    search,
    isLoading,
    inputRef,
    filteredUsers,
    handleViewChange,
    setSearch,
    error,
    closeErrorNotification,
  } = useUsers();

  return (
    <Container data-testid="users-page">
      {error && (
        <Notification
          message={error}
          onClose={closeErrorNotification}
          type="error"
        />
      )}

      {isLoading ? (
        <Container data-testid="loading-container">
          <ProgressCircle isIndeterminate />
        </Container>
      ) : (
        <>
          <div>
            <h1>Lista de Usuários</h1>
            <p>
              A lista exibe informações de usuários obtidas a partir de uma API
              pública, permitindo fácil visualização e consulta dos dados.
            </p>
          </div>

          <StyledButtonWrapper>
            <Filter value={search} onChange={setSearch} inputRef={inputRef} />
            <StyledButton
              onPress={handleViewChange}
              data-testid="view-switch-button"
              aria-label={VIEW_SWITCH_TEXT[view === "card" ? "TABLE" : "CARD"]}>
              {VIEW_SWITCH_TEXT[view === "card" ? "TABLE" : "CARD"]}
            </StyledButton>
          </StyledButtonWrapper>

          {filteredUsers.length === 0 ? (
            <NoResults data-testid="no-results" />
          ) : view === "card" ? (
            <CardContainer data-testid="card-view">
              {filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </CardContainer>
          ) : (
            <UserTable users={filteredUsers} data-testid="table-view" />
          )}
        </>
      )}
    </Container>
  );
};
