
import { USER_LOGIN} from '../types';

const initialData = {
  isLoginSuccess: false,
};

export default (state = initialData, action) => {

  switch (action.type) {

    case USER_LOGIN[0]:
      return {
        ...state,
        signupObj: {
          ...state.signupObj,
          isProgress: true,
          status: 'initiated',
        },
      };
    case USER_LOGIN[1]:
      return {
        ...state,
        signupObj: {
          ...state.signupObj,
          isProgress: false,
          status: 'success',
          response: action?.payload?.data,
        },
        // token: action?.payload?.data?.data.token,

      };
    case USER_LOGIN[2]:
      return {
        ...state,
        signupObj: {
          ...state.signupObj,
          isProgress: false,
          status: 'failure',
          response: null,
        },
      };

    default:
      return state;
  }
};
