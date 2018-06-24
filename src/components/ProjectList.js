import React from "react";
import { connect } from "react-redux";
import { getFilteredProjects, isProjectsLoading } from "../selectors";
import ProjectItem from "./ProjectItem";
import Counter from "./Counter";
import { Card, Header, Segment, Button } from "semantic-ui-react";

const ProjectList = ({ projects }) => (
  <Counter>
    {(counter, plus, minus) => {
      return (
        <div>
          <Segment clearing vertical basic>
            <Button.Group basic floated="right">
              <Button onClick={minus} icon="minus" />
              <Button>limit: {counter}</Button>
              <Button onClick={plus} icon="plus" />
            </Button.Group>
            <Header floated="left" as="h1">
              Dostępne projekty aplikacji:
            </Header>
          </Segment>
          <Card.Group itemsPerRow={3}>
            {projects
              .slice(0, counter)
              .map(item => <ProjectItem key={item.id} id={item.id} />)}
          </Card.Group>
        </div>
      );
    }}
  </Counter>
);

ProjectList.defaultProps = {
  projects: []
};

const mapStateToProps = (state, ownProps) => ({
  // TODO
});

export default connect(mapStateToProps)(ProjectList);
