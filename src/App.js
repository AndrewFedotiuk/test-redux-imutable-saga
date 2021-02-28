import Layout from "./components/Layout";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import RegisterPage from "./components/pages/RegisterPage";
import UsersPage from "./components/pages/UsersPage";
import PostsPage from "./components/pages/PostsPage";

import CONST from "./CONST";

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route
						exact
						path={CONST.USERS}
						render={() => <UsersPage />}
					/>
					<Route
						path={CONST.POSTS}
						render={() => <PostsPage />}
					/>
					<Route
						path={CONST.REGISTRATION}
						render={() => <RegisterPage />}
					/>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
