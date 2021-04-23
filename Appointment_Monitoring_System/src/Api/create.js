/******************************** Import libs ************************************/
import {postDataApi} from './actions';
import {URL_CONSTANTS} from './urls';

const postUserData = params => {
  return postDataApi(URL_CONSTANTS.users, params);
};

const postLoginRequestData = params => {
  return postDataApi(URL_CONSTANTS.login, params);
};

const postRegisterRequestData = params => {
  console.log(params, URL_CONSTANTS.register, 'Thsi is from params');
  return postDataApi(URL_CONSTANTS.register, params);
};

const postLogoutRequestData = params => {
  return postDataApi(URL_CONSTANTS.logout, params);
};

const postRefreshTokensData = params => {
  return postDataApi(URL_CONSTANTS.refreshTokens, params);
};

const postForgotPasswordData = params => {
  return postDataApi(URL_CONSTANTS.forgotPassword, params);
};

const postResetPasswordData = params => {
  return postDataApi(URL_CONSTANTS.resetPassword, params);
};

export {
  postUserData,
  postLoginRequestData,
  postRegisterRequestData,
  postLogoutRequestData,
  postRefreshTokensData,
  postForgotPasswordData,
  postResetPasswordData,
};
