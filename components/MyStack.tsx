import React from 'react';
import Resume from './Resume';
// import {Easing, Animated} from 'react-native';
import EditResume from './EditFiles/EditResume';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {TransitionPresets} from 'react-navigation-stack';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Resume'}
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: 'grey'},
        // headerBackground: () => {
        //   <Animated.View
        //     // eslint-disable-next-line react-native/no-inline-styles
        //     style={{
        //       flex: 1,
        //       backgroundColor: 'transparent',
        //       opacity: 1,
        //     }}
        //   />;
        // },
        // ...TransitionPresets.SlideFromRightIOS,
        // headerTitleStyle: {
        //   color: 'white',
        // }},
        // headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        // headerTitleStyle: {
        //   color: 'white',
        // },
      }}>
      <Stack.Screen name="Resume" component={Resume} />
      <Stack.Screen name="Edit" component={EditResume} />
    </Stack.Navigator>
  );
}

export default MyStack;
