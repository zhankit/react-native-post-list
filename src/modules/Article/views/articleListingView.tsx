import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';

import { LOAD_ARTICLE_LOADING } from '../src/articleActions';
import { articleDataSelector } from '../src/articleSelectors';

interface articleListingStateProps {
	article: Post.Article[]
}

type PostProps = articleListingStateProps;


const ArticleListingScreen = (props: PostProps) => {

	const { article } = props;
	const dispatch = useDispatch();

	return (
	<View style={{...styles.mainContainer, ...{ backgroundColor: 'white'}}}>
		<FlatList
			data={article}
			renderItem={({item}) => <TouchableOpacity onPress={() => dispatch({type: LOAD_ARTICLE_LOADING, index: item.id})}><Text style={styles.item}>{item.title}</Text><Text style={styles.subItem}>{item.body}</Text></TouchableOpacity>}
		/>
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
	item: {
		paddingHorizontal: 20,
		paddingTop: 20,
		fontSize: 18,
		fontWeight: '600',
		flexWrap: 'wrap',
	},
	subItem: {
		paddingHorizontal: 20,
		paddingBottom: 10,
		fontSize: 12,
		flexWrap: 'wrap',
	},
  });

export default connect<articleListingStateProps, undefined>(
	(state: GlobalState) => ({
		article: articleDataSelector(state),
	}),
	undefined
)(ArticleListingScreen);
