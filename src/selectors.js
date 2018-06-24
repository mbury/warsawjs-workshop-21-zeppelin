import { createSelector } from "reselect";
import { intersection, flatten, uniq, flow, sortBy, uniqBy } from "lodash";

export const getShops = state => state.shops;
export const getSelectedtags = state => state.selectedtags;
export const getSelectedPoint = state => state.selectedPoint;
export const getProjectsOrder = state => state.projects.order;
export const getProjectsEntities = state => state.projects.entities;
export const getSimilars = state => state.similars;
export const isAppLoading = state => state.isAppLoading;
export const isProjectsLoading = state =>
  isAppLoading(state) || state.projects.loading;

export const getProject = (state, props) =>
  state.projects.entities[parseInt(props.id, 10)];

export const getFiltredComments = createSelector(
  getProject,
  getSelectedPoint,
  (project, point) => {
    // TODO
  }
);

export const getProjectPoints = createSelector(getProject, project => {
  // TODO
});

export const getProjects = createSelector(
  getProjectsOrder,
  getProjectsEntities,
  (order, entities) => // TODO
);

export const getMatchtags = createSelector(
  getSelectedtags,
  getProjects,
  (tags, projects) => {
    // TODO
  }
);

export const getFilteredProjects = createSelector(
  getSelectedtags,
  getProjects,
  getMatchtags,
  (tags, projects, match) => {
    // TODO
  }
);

export const getAlltags = createSelector(
  getProjects,
  // TODO
);

export const getNotSelectedtags = createSelector(
  getSelectedtags,
  getAlltags,
  // TODO
);
