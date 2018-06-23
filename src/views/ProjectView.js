import React from "react";
import ImageCommnets from "../components/ImageCommnets";
import SidebarComments from "../components/SidebarComments";
import Layout from "../components/Layout";
import ProjectSimilars from "../components/ProjectSimilars";

const ProjectView = ({ match }) => (
  <Layout
    sidebar={<SidebarComments id={match.params.projectId} />}
    content={
      <div>
        <ImageCommnets id={match.params.projectId} />
        <ProjectSimilars id={match.params.projectId} />
      </div>
    }
  />
);

export default ProjectView;
