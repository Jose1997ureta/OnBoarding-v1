import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// SCREENS
import {OnBoardingScreen} from './src/screens';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen
          name="onBoardingScreen"
          component={OnBoardingScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
