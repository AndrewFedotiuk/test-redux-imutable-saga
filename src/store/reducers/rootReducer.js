import { combineReducers } from 'redux-immutable';
import users from "./users";
import posts from "./posts";

export default combineReducers({
	users,
	posts
})