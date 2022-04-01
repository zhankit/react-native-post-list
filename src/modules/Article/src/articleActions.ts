import { createAction } from '@reduxjs/toolkit'

export const LOAD_ARTICLE_LIST_LOADING = 'ARTICLE/LOAD_LISTING_START';
export const LOAD_ARTICLE_LIST_SUCCESS = 'ARTICLE/LOAD_LISTING_SUCCESS';
export const LOAD_ARTICLE_LIST_ERROR = 'ARTICLE/LOAD_LISTING_ERROR';

export const loadPostLoadingAction = createAction(LOAD_ARTICLE_LIST_LOADING)
export const loadPostSuccessAction = createAction<Post.Article[]>(LOAD_ARTICLE_LIST_SUCCESS)
export const loadPostErrorAction = createAction(LOAD_ARTICLE_LIST_ERROR)


export const LOAD_ARTICLE_LOADING = 'ARTICLE/LOAD_ARTICLE_START';
export const LOAD_ARTICLE_SUCCESS = 'ARTICLE/LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_COMMENTS_SUCCESS = 'ARTICLE/LOAD_ARTICLE_COMMENTS_SUCCESS';
export const LOAD_ARTICLE_ERROR = 'ARTICLE/LOAD_ARTICLE_ERROR';

export const loadArticleLoadingAction = createAction<number>(LOAD_ARTICLE_LOADING)
export const loadArticleSuccessAction = createAction<Post.Article>(LOAD_ARTICLE_SUCCESS)
export const loadArticleCommentsSuccessAction = createAction<Post.Comments[]>(LOAD_ARTICLE_COMMENTS_SUCCESS)
export const loadArticleErrorAction = createAction(LOAD_ARTICLE_ERROR)
