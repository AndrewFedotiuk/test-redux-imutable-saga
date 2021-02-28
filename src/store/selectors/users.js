import {createSelector} from 'reselect'

export const getActiveUserId = (state) => state.getIn(['users', 'activeUser']);

export const getUserById = (state, userId) => state.getIn(['users', 'items', userId]);

export const getUsers = (state) => state.getIn(['users', 'items']);

export const getUserFields = (state) => state.getIn(['users', 'formFields']);

export const getActiveUser = createSelector(
	getActiveUserId,
	getUsers,
	(activeUserId, users) => users.get(activeUserId)
);