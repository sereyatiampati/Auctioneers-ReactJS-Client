import { useNavigate } from 'react-router-dom';

export function getJwtToken() {
  return localStorage.getItem('jwt');
}

function clearJwtToken() {
  localStorage.setItem('jwt', '');
}

function setJwtToken(token) {
  localStorage.setItem('jwt', token);
}

export async function logoutHandler() {
  const navigate = useNavigate();
  clearJwtToken();
  navigate('login');
}

export async function loginHandler(username, password, stateHooks) {
  const [setSubmitRespondPending, setLoginError, setLoggedIn] = stateHooks;
  const navigate = useNavigate();

  let response = null;
  setSubmitRespondPending(true);
  const loginRequestHeader = { 'Content-Type': 'application/json' };
  const loginRequestBody = { username: username, password: password };
  try {
    response = await fetch('/login', {
      method: 'POST',
      headers: loginRequestHeader,
      body: JSON.stringify(loginRequestBody),
    });
  } catch (error) {
    console.log('errors');
  }

  setSubmitRespondPending(false);
  if (response?.ok) {
    const responseBody = await response.json();
    setJwtToken(responseBody.encodedToken);
    setLoggedIn(true);
    const { role } = JSON.parse(window.atob(responseBody.encodedToken.split('.')[1])).role;
    if (role === 'buyer') {
      navigate('/auctions');
    } else if (role === 'seller') {
      navigate('/seller');
    }
  } else if (response.status === 401) {
    setLoginError('Invalid username or password');
  } else {
    setLoginError('Login error');
  }
}
