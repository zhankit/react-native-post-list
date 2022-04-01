import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import DButton from '../../../components/DButton/DButton';
import { LOAD_ARTICLE_LIST_LOADING } from '../../Article/src/articleActions';

const HomeScreen = () => {

	const dispatch = useDispatch();

	return (
	<View style={{...styles.mainContainer, ...{ backgroundColor: 'white'}}}>
		<Text style={{...styles.container, ...{ color: 'black'}}}>Welcome to the demo of showing the list!</Text>
		<DButton title="Start" isDisabled={false} type={'contrast'} onPress={() => dispatch({ type: LOAD_ARTICLE_LIST_LOADING})} />
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
	  fontWeight: 'bold',
	  fontSize: 30,
	  paddingLeft: 20,
	  paddingRight: 20,
	},
	mainContainer: {
	  flex: 1,
	  alignContent: 'center',
	  justifyContent: 'center',
	},
	logo: {
	  width: 200,
	  height: 200,
	},
	title: {
	  fontSize: 20,
	  fontWeight: 'bold',
	},
  });

export default HomeScreen;
