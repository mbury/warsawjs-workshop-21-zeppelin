import { combineReducers } from "redux";
import { mergeEntities } from "./utils";
import uniq from "lodash/uniq";

const projects = (
  state = { order: [], entities: {}, loading: false },
  action
) => {
  switch (action.type) {
    case "PROJECTS_REFRESH":
      return { ...state, loading: true };
    case "FETCH_PROJECTS_FAILURE":
      return { ...state, loading: false };
    case "FETCH_PROJECTS_SUCCESS":
      return {
        order: [...action.payload],
        entities: mergeEntities(state.entities, action.entities.projects),
        loading: false
      };
    default:
      return state;
  }
};

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    case "APP_INIT":
      return true;
    case "APP_INIT_FINISHED":
      return false;
    default:
      return state;
  }
};

const selectedtags = (state = [], action) => {
  switch (action.type) {
    case "DELETE_INGREDIENT":
      return state.filter(item => item !== action.payload);
    case "ADD_TAG":
      return uniq([...state, action.payload]);
    case "SELECT_TAG": {
      if (state.includes(action.payload)) {
        return state.filter(item => item !== action.payload);
      } else {
        return uniq([...state, action.payload]);
      }
    }
    default:
      return state;
  }
};

const selectedPoint = (state = null, action) => {
  switch (action.type) {
    case "DESELECT_POINT":
    case "CLOSE_PROJECT":
      return null;
    case "SELECT_POINT": {
      return action.payload;
    }
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
    case "FIND_PROJECT_SIMILARS":
      return {};
    case "RECEIVE_SHOP_SIMILAR":
      return {
        ...state,
        ...action.payload
      };
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
