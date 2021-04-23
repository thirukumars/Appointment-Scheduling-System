/******************************** Import Api ************************************/
import {hostConfig} from '../config';
// import { postRefreshTokensData } from "./create";

const token = 'token';

/******************************** Response Handler ************************************/
const responseStatusHandler = response => {
  switch (response.status) {
    case 400:
      return response;
    case 401:
      return reLogin();
    case 402:
      return {error: 'Payment Required'};
    case 403:
      return {error: 'Forbidden'};
    case 404:
      return {error: 'Not Found'};
    case 405:
      return {error: 'Method Not Allowed'};
    case 406:
      return {error: 'Not Acceptable'};
    case 408:
      return {error: 'Request Timeout'};
    case 409:
      return {error: 'Request Already Exist'}; // Conflict
    case 410:
      return {error: 'permanently deleted from server'};
    case 500:
      return {error: 'Internal Server Error'};
    case 501:
      return {error: 'Not Implemented'};
    case 502:
      return {error: 'Bad Gateway'};
    case 503:
      return {error: 'Service Unavailable'};
    case 504:
      return {error: ' Gateway Timeout'};
    case 511:
      return {error: ' Network Authentication Required'};
    case 200:
    case 201:
      return response;
    default:
      return false;
  }
};

/******************************** Error Handler ************************************/
const errorHandler = error => {
  return false;
};

/******************************** View with query Api ************************************/
const getListByApi = (requestUrl, params) => {
  let getParams = '?';

  return fetch(`${hostConfig.API_URL}${requestUrl}${getParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      return responseStatusHandler(response);
    })
    .then(result => {
      return result.status === 200 ||
        result.status === 201 ||
        result.status === 400
        ? result.json()
        : result;
    })
    .catch(error => {
      errorHandler(error);
    });
};

/******************************** View Api ************************************/
const viewDataByApi = async (requestUrl, dataId) => {
  return await fetch(`${hostConfig.API_URL}${requestUrl}/${dataId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      return responseStatusHandler(response);
    })
    .then(result => {
      return result.status === 200 ||
        result.status === 201 ||
        result.status === 400
        ? result.json()
        : result;
    })
    .catch(error => {
      errorHandler(error);
    });
};

/******************************** Create Api ************************************/
const postDataApi = async (requestUrl, params) => {
  console.log(hostConfig.API_URL, requestUrl, 'from the action.js');
  return await fetch(`${hostConfig.API_URL}${requestUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(params),
  })
    .then(response => {
      return responseStatusHandler(response);
    })
    .then(result => {
      return result.status === 200 ||
        result.status === 201 ||
        result.status === 400
        ? result.json()
        : result;
    })
    .catch(error => {
      errorHandler(error);
    });
};

/******************************** Create with query Api ************************************/
const postDataWithParamsApi = async (requestUrl, data, params) => {
  let getParams = '?';
  if (params && params.rowsPerPage && params.rowsPerPage !== undefined) {
    getParams += `limit=${params.rowsPerPage}`;
  }

  if (params && params.currentPage && params.currentPage !== undefined) {
    getParams += `&page=${params.currentPage}`;
  }
  return await fetch(`${hostConfig.API_URL}${requestUrl}${getParams}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      return responseStatusHandler(response);
    })
    .then(result => {
      return result.status === 200 ||
        result.status === 201 ||
        result.status === 400
        ? result.json()
        : result;
    })
    .catch(error => {
      errorHandler(error);
    });
};

/******************************** Update Api ************************************/
const putDataApi = async (requestUrl, params, id) => {
  return await fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(params),
  })
    .then(response => {
      return responseStatusHandler(response);
    })
    .then(result => {
      return result.status === 200 ||
        result.status === 201 ||
        result.status === 400
        ? result.json()
        : result;
    })
    .catch(error => {
      errorHandler(error);
    });
};

/******************************** Delete Api ************************************/
const deleteDataApi = async (requestUrl, id) => {
  return await fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      return responseStatusHandler(response);
    })
    .then(result => {
      return result.status === 200 ||
        result.status === 201 ||
        result.status === 400
        ? result.json()
        : result;
    })
    .catch(error => {
      errorHandler(error);
    });
};

/********************************Export ************************************/
export {
  getListByApi,
  viewDataByApi,
  postDataApi,
  postDataWithParamsApi,
  putDataApi,
  deleteDataApi,
  responseStatusHandler,
};
