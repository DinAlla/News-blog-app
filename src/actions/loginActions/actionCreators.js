export const ACTION_LOGIN_STATUS_CHANGED = 'ACTION_LOGIN_STATUS_CHANGED ';
export const ACTION_USERNAME_CHANGED = 'ACTION_USERNAME_CHANGED ';
export const ACTION_PASSWORD_CHANGED = 'ACTION_PASSWORD_CHANGED ';

export const changeLoginStatusActionCreator = () => {
  return {
    type: ACTION_LOGIN_STATUS_CHANGED,
    payload: true
  }
};

export const changeUsernameActionCreator = (newUsername) => {
  return {
    type: ACTION_USERNAME_CHANGED,
    payload: newUsername
  }
};

export const changePasswordActionCreator = (newPassword) => {
  return {
    type: ACTION_PASSWORD_CHANGED,
    payload: newPassword
  }
};