import { normalize, schema } from "normalizr";

const projects = new schema.Entity("projects", {}, { idAttribute: "id" });
const projectsList = new schema.Array(projects);
const actionsSchemas = {
  FETCH_PROJECTS_SUCCESS: projectsList
};

export const entitiesMiddleware = store => next => action => {
  const { type, payload } = action;
  const typeSchema = actionsSchemas[type];
  if (typeSchema) {
    const { result, entities } = normalize(payload, typeSchema);
    return next({ type, payload: result, entities });
  } else {
    return next({ type, payload });
  }
};
