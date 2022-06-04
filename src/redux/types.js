export const createTypes = (namespace, type) => [
  `${namespace}/${type}_REQUEST`,
  `${namespace}/${type}_SUCCESS`,
  `${namespace}/${type}_FAIL`,
];

const userSessionNameSpace = 'userSession';

export const USER_LOGIN = createTypes(userSessionNameSpace, 'USER_LOGIN');
export const SET_USER_OBJ = 'SET_USER_OBJ';
export const CLEAR_USER_OBJ = 'CLEAR_USER_OBJ';

