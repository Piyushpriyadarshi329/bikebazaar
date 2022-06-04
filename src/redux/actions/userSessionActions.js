import { API } from '../../utils/theme';

import { USER_LOGIN} from '../types';

// check login
export const userlogin = (params) => ({
  types: USER_LOGIN,
  payload: {
    client: 'default',
    request: {
      url: API.baseUrl + 'login',
      method: 'post',
      data: params
    },
  },
});

