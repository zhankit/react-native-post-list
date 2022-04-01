import { createSelector } from '@reduxjs/toolkit';

export const articleSelector = (state: GlobalState) => {return state.articleReducers};

export const articleDataSelector = createSelector(articleSelector, article => {return article.articleListing.data});
export const articleCommentSelector = createSelector(articleSelector, article => {return article.commentsListing.comment});

