import {fromJS, List, Map} from "immutable";
import * as actionTypes from './actionTypes';

const initialState = Map({
	items: List()
});

export default function posts(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_POSTS: {
			return state.set('items', fromJS(action.posts));
		}
		default:
			return state
	}
}