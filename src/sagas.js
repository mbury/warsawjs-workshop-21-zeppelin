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
    // TODO
  }
});

function* initApp() {
  yield take("APP_INIT");
  // TODO
}

function* projectsFetch() {
  yield randomDelay(1000, 2500);
  // TODO
}

function* checkSimilars(projectId) {
  // TODO
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
  // TODO
}
