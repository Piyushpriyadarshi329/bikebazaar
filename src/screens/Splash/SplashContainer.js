import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import SplashComponent from './SplashComponent';
import SplashScreen from 'react-native-splash-screen';
import {store} from '../../redux/actions/store';
import {AppState, Text} from 'react-native';
import * as Actions from '../../redux/actions/userSessionActions';

var socket;

const SplashContainer = props => {
  const {navigation, selected_data, selected_token} = props;

  useEffect(() => {
    SplashScreen.hide();
    navigation.replace('LoginContainer');
  }, []);

  return <SplashComponent props={props} />;
};

const mapStateToProps = ({dashboard, userObj, userSession, widgets}) => ({
  dashboard,
  userObj,
  widgets,
  isUserLoggedin: userSession.isUserLoggedin,
});

const mapDispatchToProps = dispatch => ({
  selected_data: params => dispatch(Actions.selected_data(params)),
  selected_token: params => dispatch(Actions.selected_token(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
