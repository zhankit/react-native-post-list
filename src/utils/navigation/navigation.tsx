import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet} from 'react-native';

import lnadingPageScreen from '../../modules/LandingPage/views/landingPageView';
import ArticleListingScreen from '../../modules/Article/views/articleListingView';
import { navigationRef } from './navigationUtils';
import articleView from '../../modules/Article/views/articleView';

const styles= StyleSheet.create({
	headerTextStyle: {
		fontWeight: 'bold',
		fontSize: 28,
		letterSpacing: 1,
		color: 'black',
	},
});

// RootNavigation.js

// add other navigation functions that you need and export them

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = (props: NavigationProps) => {

  const MainStack = createStackNavigator();
  const RootStack = createStackNavigator();

  const MainStackScreen = () => {
    return (
      <MainStack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white'},
          headerTitleStyle : styles.headerTextStyle,
        }}
      >
        <MainStack.Screen name="Home" component={lnadingPageScreen} options={{ title: 'Home' }}/>
		<MainStack.Screen name="ArticleListing" component={ArticleListingScreen} options={{ title: '' }}/>
		<MainStack.Screen name="Article" component={articleView} options={{ title: '' }}/>
      </MainStack.Navigator>
    )
  }
  return (
    <NavigationContainer theme={props.theme} ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'white'},
          headerTitleStyle : styles.headerTextStyle,
        }}
      >
        <RootStack.Screen name="Home" component={MainStackScreen} options={{ headerShown: false }}/>
        {/* <RootStack.Screen name="TextfieldForm" component={TextfieldForm} options={{ title: '' }}/>
        <RootStack.Screen name="ToggleFieldForm" component={ToggleFieldForm} options={{ title: '' }}/>
        <RootStack.Screen name="CheckboxForm" component={CheckboxForm} options={{ title: '' }}/> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

