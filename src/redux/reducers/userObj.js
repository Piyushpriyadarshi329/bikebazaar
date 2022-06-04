import { USER_LOGIN } from '../types';

const initialData = {
  userObj: null,
};

export default (state = initialData, action) => {
 switch (action.type) {
   case USER_LOGIN[0]:
     return {
       ...state,
     };
   case USER_LOGIN[1]:
     return {
       ...state,
       userObj: action?.payload?.data,
     };
   case USER_LOGIN[2]:
     return {
       ...state,
       userObj: {},
     };
   default:
     return state;
 }
};