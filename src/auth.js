import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function setRefreshTokenToCookie(refresh_token) {
    cookies.set('refresh_token', refresh_token, { sameSite: 'strict' });
  }


// 로그아웃 시 쿠키 삭제
export function logout() {
    console.log('localStorage set logout!');
    window.localStorage.setItem('logout', Date.now());
    cookies.remove('refresh_token');
  }

export const setCookie = (name, value, option) => {
    return cookies.set(name, value, { ...option });
}

export const getCookie = (name) => {
    return cookies.get(name);
}