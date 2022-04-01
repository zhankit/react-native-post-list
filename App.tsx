import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary'
import { Provider } from 'react-redux';

import CustomFallback from './src/components/DError/DError';
import Navigation from './src/utils/navigation/navigation';
import store from './src/utils/store/store';

const MyTheme = {
	...DefaultTheme,
	colors: {
	  ...DefaultTheme.colors,
	  primary: 'rgb(255, 45, 85)',
	},
};

const App = () => {

  return (
	<ErrorBoundary FallbackComponent={CustomFallback}>
		<Provider store={store}>
			<Navigation theme={MyTheme} />
			<StatusBar/>
		</Provider>
	</ErrorBoundary>
    );
};

export default App;
