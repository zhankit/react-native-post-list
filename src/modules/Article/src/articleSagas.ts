import axios from 'axios';
import { call, put, take } from 'redux-saga/effects';

import * as Navigation from '../../../utils/navigation/navigationUtils';
import { LOAD_ARTICLE_LIST_LOADING, LOAD_ARTICLE_LOADING, loadArticleCommentsSuccessAction, loadPostSuccessAction } from './articleActions';

export function axiosGet(url: string) {
	return axios.get(url)
	  .then((response) => {
		return response.data;
	  })
	  .catch((error) => {
		throw error;
	  })
}

const URL_SCHEME = 'https://jsonplaceholder.typicode.com';

export function* loadArticle() {

	while (true) {
		yield take(LOAD_ARTICLE_LIST_LOADING);
		// To dispatch this when it is start DISPATH( STORE/START_LOADING)
		try {
			const response = yield call(axiosGet, `${URL_SCHEME}/posts`);
			yield put(loadPostSuccessAction(response));
			Navigation.navigate('ArticleListing', {});
			console.log('loadArticle', 'Completed');
		} catch (e) {
			console.log('loadArticle', 'Retrieve listing failure', e);
		}
	}
}

export function* loadComments() {

	while (true) {

		const actions = yield take(LOAD_ARTICLE_LOADING);
		// To dispatch this when it is start DISPATH( STORE/START_LOADING)
		try {
			const response = yield call(axiosGet, `${URL_SCHEME}/comments?postId=${actions.index}`);
			yield put(loadArticleCommentsSuccessAction(response));
			Navigation.navigate('Article', {itemId: actions.index});
			console.log('loadComments', 'Completed');
		} catch (e) {
			console.log('loadComments', 'Retrieve listing failure', e);
		}
	}

}
