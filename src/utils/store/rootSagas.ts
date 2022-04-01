import { all } from 'redux-saga/effects';

import { loadComments, loadArticle } from '../../modules/Article/src/articleSagas';

export default function* rootSaga() {
	yield all([
		loadArticle(),
		loadComments(),
	])
}
