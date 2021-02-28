import Header from "../Header";
import './index.scss';

const Layout = ({children}) => {
	
	return (
		<div className="layout">
			<Header />
			<main>
				{children}
			</main>
		</div>
	)
}

export default Layout;
