import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import withLoadingInfo from "./LoadingInfo";

import { isAppLoading } from "../selectors";

import Menu from "./Menu";
const Home = props => {
  return (
    <div>
      <Menu />
      <Container>
        <Segment basic vertical>
          <Grid divided stackable reversed={"mobile"}>
            <Grid.Column width={12}>{props.content}</Grid.Column>
            <Grid.Column width={4}>{props.sidebar}</Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // TODO
});

const loadingMessage = "Za chwilę zostanie wyświetlony projekt";
export default connect(mapStateToProps)();
// TODO
