import * as actionTypes from './actionTypes';

export const addUser = (userName, userId) => ({
	type: actionTypes.ADD_USER,
	userName,
	userId,
})

export const setActiveUser = (userId) => ({
	type: actionTypes.SET_ACTIVE_USER,
	userId,
})

export const removeActiveUser = (userId) => ({
	type: actionTypes.REMOVE_ACTIVE_USER,
	userId,
})

export const serUserFields = (formFields) => ({
	type: actionTypes.SET_USER_FIELDS,
	formFields,
})

