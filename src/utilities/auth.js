export function getJwtToken() {
  return localStorage.getItem('jwt');
}

export function getJSONPayloadFromJwt(jwt) {
  const payloadIndex = 1;
  return JSON.parse(window.atob(jwt.split('.')[payloadIndex]));
}

function clearJwtToken() {
  localStorage.setItem('jwt', '');
}

function setJwtToken(token) {
  localStorage.setItem('jwt', token);
}

export async function jwtLogoutHandler(useNavigateHook) {
  clearJwtToken();
  useNavigateHook('/login');
}

export async function jwtLoginHandler(requestBody, endpoint,  loginSuccessCallback, loginFailureCallback) {
    let responsePromise = null;
    const requestHeader = { 'Content-Type': 'application/json' };
    try {
      responsePromise = await fetch(endpoint, {
        method: 'POST',
        headers: requestHeader,
        body: JSON.stringify(requestBody),
      });
    } catch (error) {
      console.log('Exception encountered');
    }
  /* Guard block */
  if (!responsePromise.ok) {
    loginFailureCallback(responsePromise);
    return;
  }

  const response = await responsePromise.json();
  setJwtToken(response.jwt);
  loginSuccessCallback(response.jwt);
}

export async function jwtSignupHandler(requestBody, endpoint,  signupSuccessCallback, signupFailureCallback) {
  let responsePromise = null;
  const requestHeader = { 'Content-Type': 'application/json' };
  try {
    responsePromise = await fetch(endpoint, {
      method: 'POST',
      headers: requestHeader,
      body: JSON.stringify(requestBody),
    });
  } catch (error) {
    console.log('Exception encountered');
  }
/* Guard block */
if (!responsePromise.ok) {
  signupFailureCallback(responsePromise);
  return;
}

const response = await responsePromise.json();
signupSuccessCallback(response.jwt);
}
