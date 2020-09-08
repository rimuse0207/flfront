import { combineReducers } from "redux";
import flowerData from "./flowerData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};
const rootReducer = combineReducers({
  flowerData,
});

export default persistReducer(persistConfig, rootReducer);
