import React from "react";
import { Header } from "semantic-ui-react";

import SelectedTags from "../components/SelectedTags";
import SearchTags from "../components/SearchTags";

const SidebarTags = props => {
  return (
    <div>
      <Header as="h3">Szukane tagi: </Header>
      <SearchTags />
      <SelectedTags />
    </div>
  );
};

export default SidebarTags;
