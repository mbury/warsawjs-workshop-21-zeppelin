import React from "react";
import { Item, Segment } from "semantic-ui-react";
import ProjectItem from "../components/ProjectItem";

const SelectedProject = ({ id }) => {
  return (
    <Segment basic vertical>
      <Item.Group>
        <ProjectItem selected id={id} />
      </Item.Group>
    </Segment>
  );
};

export default SelectedProject;
