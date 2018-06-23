import {
  take,
  put,
  select,
  fork,
  cancel,
  takeLatest,
  all
} from "redux-saga/effects";
import { random } from "lodash";
import { randomDelay } from "./utils";
import { getShops } from "./selectors";
import { CALL_API } from "redux-api-middleware";

const getProjectsList = () => ({
  [CALL_API]: {
    endpoint: "/api/projects",
    method: "GET",
    types: [
      "FETCH_PROJECTS_REQUEST",
      "FETCH_PROJECTS_SUCCESS",
      "FETCH_PROJECTS_FAILURE"
    ]
  }
});

function* initApp() {
  yield take("APP_INIT");
  yield projectsFetch();
  yield put({ type: "APP_INIT_FINISHED" });
}

function* projectsFetch() {
  yield randomDelay(1000, 2500);
  yield put(getProjectsList());
  yield take(["FETCH_PROJECTS_SUCCESS", "FETCH_PROJECTS_FAILURE"]);
}

function* checkSimilars(projectId) {
  const shops = yield select(getShops);
  const sagas = shops.map(item => fork(checkShop, item.id, projectId));
  const tasks = yield all(sagas);
  let finished = 0;
  while (finished < shops.length) {
    const action = yield take([
      "RECEIVE_SHOP_SIMILAR",
      "FIND_PROJECT_SIMILARS",
      "CLOSE_PROJECT"
    ]);
    if (["FIND_PROJECT_SIMILARS", "CLOSE_PROJECT"].includes(action.type)) {
      finished = shops.length;
      yield all(tasks.map(task => task.isRunning() && cancel(task)));
    } else {
      finished++;
    }
  }
}

function* checkShop(shopId, projectId) {
  yield randomDelay(1000, 2500);
  yield put({
    type: "RECEIVE_SHOP_SIMILAR",
    payload: {
      [shopId]: [random(1, 10), random(1, 100), random(1, 1000)]
    }
  });
}

export default function* rootSaga() {
  yield initApp();
  yield takeLatest("PROJECTS_REFRESH", projectsFetch);
  while (true) {
    const action = yield take("FIND_PROJECT_SIMILARS");
    yield fork(checkSimilars, action.payload);
  }
}
