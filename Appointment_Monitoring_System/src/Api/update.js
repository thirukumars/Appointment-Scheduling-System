/******************************** Import libs ************************************/
import { putDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

const updateUserData = (params, id) => {
  return putDataApi(URL_CONSTANTS.users, params, id);
};

const updateFavorites = (params, id) => {
  return putDataApi(URL_CONSTANTS.users, params, id);
};

export {
  updateUserData,
  updateFavorites,
};
