export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT='LOG_OUT'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function logIn(id) {
  return {
    type: LOG_IN,
    id
  }
}

export function logOut() {
  return {
    type: LOG_OUT
  }
}