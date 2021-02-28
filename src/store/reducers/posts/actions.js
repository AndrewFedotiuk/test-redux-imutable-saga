import * as actionTypes from './actionTypes';

export const getPosts = (userId) => ({
	type: actionTypes.GET_POSTS,
	userId,
})

export const setPosts = (posts) => ({
	type: actionTypes.SET_POSTS,
	posts,
})

