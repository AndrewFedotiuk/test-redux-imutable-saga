import postsSagas from "./posts";

export default function runSagas(sagaMiddleware){
	postsSagas(sagaMiddleware);
}