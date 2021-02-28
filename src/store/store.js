import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import runSagas from "./sagas/rootSaga";

export default function configureAppStore(preloadedState) {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	
	const enhancers = [applyMiddleware(...middlewares)];
	const composedEnhancers = composeWithDevTools(...enhancers);
	
	const store = createStore(rootReducer, preloadedState, composedEnhancers);
	
	runSagas(sagaMiddleware);
	
	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
	}
	
	return store;
}
