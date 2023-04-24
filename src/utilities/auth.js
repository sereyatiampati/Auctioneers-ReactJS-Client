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
  useNavigateHook('http://localhost:3000/login');
}

export async function jwtLoginHandler(username, password, loginSuccessCallback, loginFailureCallback) {
  let responsePromise = null;
  const loginRequestHeader = { 'Content-Type': 'application/json' };
  const loginRequestBody = { username, password };
  try {
    responsePromise = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: loginRequestHeader,
      body: JSON.stringify(loginRequestBody),
    });
  } catch (error) {
    console.log('Fetch exception');
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