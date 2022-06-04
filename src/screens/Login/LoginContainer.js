import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';

const LoginContainer = (props) => {

  const { navigation} = props;


  return (
    <LoginComponent  />
  );
  
};
// LoginContainer.navigationOptions = {
//   header: null,
// };

const mapStateToProps = ({ dashboard, userObj, userSession, widgets }) => ({
  // dashboard,
  // userObj,
  // widgets,
  // isUserLoggedin: userSession.isUserLoggedin,
});

const mapDispatchToProps = (dispatch) => ({
  // userlogin: (params) => dispatch(Actions.userlogin(params)),
  // alert_action: () => dispatch(Actions.alert_action()),
  // setUserSession: () => dispatch(Actions.setUserSession()),
  // clearUserObj: () => dispatch(Actions.clearUserObj()),
  // clearUserSession: () => dispatch(Actions.clearUserSession()),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
