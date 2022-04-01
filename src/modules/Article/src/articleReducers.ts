import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { loadArticleCommentsSuccessAction, loadArticleErrorAction, loadArticleLoadingAction, loadArticleSuccessAction, loadPostErrorAction, loadPostLoadingAction, loadPostSuccessAction } from './articleActions';

export const POST_INITIAL_STATE: Post.articleListing = {
    loading: true,
	data: [],
	comment: [],
	index: 0,
}

const articleListing = createReducer(POST_INITIAL_STATE, (builder) => {
	builder
		.addCase(loadPostLoadingAction, (state, action) => {
			return {
				...state,
				loading: true,
			}
		})
		.addCase(loadPostSuccessAction, (state, action) => {
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		})
		.addCase(loadPostErrorAction, (state, action) => {
			return {
				...state,
				loading: false,
			}
		});
})

const commentsListing = createReducer(POST_INITIAL_STATE, (builder) => {
	builder
		.addCase(loadArticleLoadingAction, (state, action) => {
			return {
				...state,
				index: action.payload,
				loading: true,
			}
		})
		.addCase(loadArticleSuccessAction, (state, action) => {
			return {
				...state,
				loading: false,
			};
		})
		.addCase(loadArticleCommentsSuccessAction, (state, action) => {
			return {
				...state,
				comment: action.payload,
				loading: false,
			};
		})
		.addCase(loadArticleErrorAction, (state, action) => {
			return {
				...state,
				loading: false,
			}
		});
})

const articleReducers = combineReducers({
	articleListing,
	commentsListing,
});

export default articleReducers;
