import React from "react";
import { Icon, Message, Container } from "semantic-ui-react";

export default ({ message, selector }) => WrappedComponent => props => {
  const isLoading = selector(props);
  return isLoading ? (
    <Container style={{ marginTop: "30%" }}>
      <Message size="massive" icon>
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>Trawa ładowanie danych</Message.Header>
          {message}
        </Message.Content>
      </Message>
    </Container>
  ) : (
    <WrappedComponent {...props} />
  );
};
