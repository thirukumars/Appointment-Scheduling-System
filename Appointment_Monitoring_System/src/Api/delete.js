/******************************** Import libs ************************************/
import { deleteDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

const deleteUser = (id) => {
  return deleteDataApi(URL_CONSTANTS.users, id);
};

const deleteFavorites = (id) => {
  return deleteDataApi(URL_CONSTANTS.favorites, id);
};


export {
  deleteUser,
  deleteFavorites,
};
