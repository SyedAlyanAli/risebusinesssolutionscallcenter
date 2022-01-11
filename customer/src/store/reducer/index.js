import { combineReducers } from "redux";
import company from "./company";
import auth from "./auth";
import filedata from "./savefile";

export default combineReducers({
  auth: auth,
  comp: company,
  filedata: filedata,
});
