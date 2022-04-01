import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';

import { articleCommentSelector, articleDataSelector } from '../src/articleSelectors';

interface articleListingStateProps {
	article: Post.Article[];
	comments: Post.Comments[];
}

type PostProps = articleListingStateProps;

const ArticleView = (props: PostProps) => {

	const { article, comments, route } = props;

	const [text, setText] = React.useState('');
	const [filterComments, setFilterComments] = React.useState(comments);

	// Similar to componentDidMount and componentDidUpdate:
	React.useEffect(() => {
		// Update the document title using the browser API
		const fitlerList: Post.Comments[] = comments.filter((item) => {
			return item.name.toLowerCase().match(text.toLowerCase())
				|| item.email.toLowerCase().match(text.toLowerCase())
				|| item.body.toLowerCase().match(text.toLowerCase());
		});
		setFilterComments(fitlerList);
	}, [text]);

	return (
		<View style={{...styles.mainContainer, ...{ backgroundColor: 'white'}}}>
			<Text style={styles.item}>{article[route.params.itemId - 1].title}</Text>
			<Text style={styles.subItem}>{article[route.params.itemId - 1].body}</Text>
			<Text style={styles.subTitle}>Comment(s)</Text>
			<TextInput
				style={styles.subTitle2}
				onChangeText={setText}
				value={text}
				placeholder="Search..."
				keyboardType="default"
			/>
			<FlatList
				data={filterComments}
				renderItem={({item}) => (<View>
						<Text style={styles.comment}>{item.name}</Text>
						<Text style={styles.email}>{item.email}</Text>
						<Text style={styles.subComment}>{item.body}</Text>
						<View style={styles.line}/>
					</View>)}
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
	subTitle: {
		marginLeft: 30,
		marginTop: 20,
		fontWeight: '800',
		color: 'black',
		fontSize: 16,
	},
	subTitle2: {
		marginLeft: 30,
		marginBottom: 10,
		fontWeight: '400',
		fontSize: 16,
	},
	line: {
		marginLeft: 30,
		marginRight: 10,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
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
	  fontSize: 16,
	  fontWeight: 'bold',
	},
	item: {
		paddingHorizontal: 20,
		paddingTop: 20,
		color: 'black',
		fontSize: 16,
		fontWeight: '600',
		flexWrap: 'wrap',
	},
	subItem: {
		paddingHorizontal: 20,
		paddingBottom: 10,
		fontSize: 14,
		color: 'black',
		flexWrap: 'wrap',
	},
	comment: {
		paddingHorizontal: 40,
		marginTop: 20,
		fontSize: 14,
		color: 'black',
		fontWeight: '600',
		flexWrap: 'wrap',
	},
	subComment: {
		paddingHorizontal: 40,
		paddingTop: 5,
		paddingBottom: 10,
		fontSize: 14,
		flexWrap: 'wrap',
	},
	email: {
		paddingHorizontal: 40,
		fontSize: 12,
		fontWeight: '600',
		flexWrap: 'wrap',
		fontStyle: 'italic',
	},
	notFound: {
		height: 1000,
	},
  });

export default connect<articleListingStateProps, undefined>(
	(state: GlobalState) => ({
		article: articleDataSelector(state),
		comments: articleCommentSelector(state),
	}),
	undefined
)(ArticleView);
