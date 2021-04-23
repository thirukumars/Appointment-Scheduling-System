/******************************** Import libs ************************************/
import { getListByApi, viewDataByApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

const getUserList = (params) => {
  return getListByApi(URL_CONSTANTS.users, params);
};

const getUserById = (dataId) => {
  return viewDataByApi(URL_CONSTANTS.users, dataId);
};

const getSponsorDetails = (dataId) => {
  return viewDataByApi(URL_CONSTANTS.sponsorDetails, dataId);
};

const getResourceDetails = (dataId) => {
  return viewDataByApi(URL_CONSTANTS.resourceDetails, dataId);
};

const getAllSponsor = (params) => {
  return getListByApi(URL_CONSTANTS.sponsorList, params);
};

const getAllResource = (params) => {
  return getListByApi(URL_CONSTANTS.resourceList, params);
};

const getFavorites = (params) => {
  return getListByApi(URL_CONSTANTS.favorites, params);
}

const getLocation = (params) => {
  return getListByApi(URL_CONSTANTS.location, params);
};

const getActiveStatus = (params) => {
  return getListByApi(URL_CONSTANTS.activeStatus, params);
};

export {
  getUserList,
  getUserById,

  getAllSponsor,
  getSponsorDetails,

  getAllResource,
  getResourceDetails,
  getFavorites,
  getLocation,
  getActiveStatus,
};
