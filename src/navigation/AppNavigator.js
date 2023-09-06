import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import Home from '../screens/Home';
import DetectionRes from '../screens/DetectionRes';
import Detection from '../screens/Detection';
import Caption from '../screens/Caption';
import CaptionRes from '../screens/CaptionRes';
import {TapGestureHandler} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Detection"
          options={{headerShown: false}}
          component={Detection}
        />
        <Stack.Screen
          name="OnBoard"
          options={{headerShown: false}}
          component={OnBoard}
        />
        <Stack.Screen
          name="DetectionRes"
          options={{headerShown: false}}
          component={DetectionRes}
        />
        <Stack.Screen
          name="CaptionRes"
          options={{headerShown: false}}
          component={CaptionRes}
        />
        <Stack.Screen
          name="Caption"
          options={{headerShown: false}}
          component={Caption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
