import React from "react";
import ProjectList from "../components/ProjectList";
import SidebarTags from "../components/SidebarTags";
import Layout from "../components/Layout";

const ProjectListView = ({ match }) => (
  <Layout
    sidebar={<SidebarTags id={match.params.projectId} />}
    content={<ProjectList id={match.params.projectId} />}
  />
);

export default ProjectListView;
