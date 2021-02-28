import {Link} from "react-router-dom";
import LangSelect from "./LangSelect";
import CONST from "../../CONST";

import "./index.scss";

const Header = ()=>{
	const menuListData = [
		{
			link: CONST.USERS,
			title: 'Users',
		},
		{
			link: CONST.POSTS,
			title: 'Posts',
		},
		{
			link: CONST.REGISTRATION,
			title: 'Registration',
		},
	]
	
	return(
		<header className='main-header'>
			<nav>
				<ul>
					{
						menuListData.map(menuItem=>(
							<li key={menuItem.link}>
								<Link to={menuItem.link}>{menuItem.title}</Link>
							</li>
						))
					}
				</ul>
			</nav>
			<LangSelect/>
		</header>
	)
}

export default Header;