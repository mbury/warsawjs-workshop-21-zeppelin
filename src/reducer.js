import { combineReducers } from "redux";
import { mergeEntities } from "./utils";
import uniq from "lodash/uniq";

const projects = (
  state = { order: [], entities: {}, loading: false },
  action
) => {
  switch (action.type) {
    // TODO
};

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    // TODO
  }
};

const selectedtags = (state = [], action) => {
  switch (action.type) {
    // TODO
    default:
      return state;
  }
};

const selectedPoint = (state = null, action) => {
  switch (action.type) {
    // TODO
    default:
      return state;
  }
};

const shops = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const similars = (state = {}, action) => {
  switch (action.type) {
    // TODO
    default:
      return state;
  }
};

export default combineReducers({
  selectedPoint,
  projects,
  shops,
  similars,
  selectedtags,
  isAppLoading
});
