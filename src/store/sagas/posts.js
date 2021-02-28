import {call, put, takeEvery} from "@redux-saga/core/effects";
import {GET_POSTS} from "../reducers/posts/actionTypes";
import API from "../../services/API";
import {setPosts} from "../reducers/posts/actions";

function* getPosts(action){
	const posts = yield call(API.postsService.getPostById, action.userId);
	if(posts){
		yield put(setPosts(posts))
	}
}

export function* postSaga() {
	yield takeEvery(GET_POSTS, getPosts);
}

export default function runSagas(sagaMiddleware) {
	sagaMiddleware.run(postSaga);
}