const { envToken, successAuthResponse, authError400, authError401 } = require('../utils');

const userAuthentication = async (req, res, next) => {
  const token = req?.headers['x-access-token'];
  console.debug('User Token: ', token);

  if (!token) {
    return authError400;
  }

  const isAuthorized = envToken === token;
  console.log('Authorized: ', isAuthorized);

  if (isAuthorized) {
    return successAuthResponse;
  } else {
    return authError401;
  }
};

const handleAuth = async (req, res) => {
  const authResponse = await userAuthentication(req, res);
  console.debug('Auth Response: ', authResponse.data);
  return res.status(authResponse.status).json(authResponse.data);
};

module.exports = { handleAuth };
