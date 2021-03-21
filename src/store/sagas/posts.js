import {call, put, takeEvery, getContext} from "@redux-saga/core/effects";
import {GET_POSTS} from "../reducers/posts/actionTypes";
import {setPosts} from "../reducers/posts/actions";

function* getPosts(action){
	const API = yield getContext('API');
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