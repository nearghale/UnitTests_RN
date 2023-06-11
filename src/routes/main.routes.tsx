import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import * as Pages from '../pages';

import {RouteMain} from './routeNames';

const MainStack = createStackNavigator();

const MainRoutes: React.FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name={RouteMain.MAIN_SCREEN}
        component={Pages.MainScreen}
      />
      <MainStack.Screen
        name={RouteMain.FIRST_SCREEN}
        component={Pages.FirstScreen}
      />
      <MainStack.Screen
        name={RouteMain.SECOND_SCREEN}
        component={Pages.SecondScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
