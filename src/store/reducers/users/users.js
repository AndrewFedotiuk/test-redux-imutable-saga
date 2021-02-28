import {Map} from "immutable";
import * as actionTypes from './actionTypes';

const initialState = Map({
	items: Map(),
	activeUser: null,
	formFields: {
		userName: '',
		userId: '',
	}
});

export default function users(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_USER: {
			const {userName, userId} = action;
			return state.setIn(['items', userId], Map({
				userName,
				userId,
			}))
		}
		case actionTypes.SET_ACTIVE_USER: {
			return state.set('activeUser', action.userId);
		}
		case actionTypes.REMOVE_ACTIVE_USER:
			return state.set('activeUser', null);
		case actionTypes.SET_USER_FIELDS:
			return state.set('formFields', action.formFields)
		default:
			return state
	}
}