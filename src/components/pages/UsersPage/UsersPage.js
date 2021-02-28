import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getActiveUserId, getUsers} from "../../../store/selectors/users";
import {setActiveUser} from "../../../store/reducers/users/actions";
import {useState} from "react";

import './index.scss';

const UsersPage = () => {
	const users = useSelector(getUsers);
	const activeId = useSelector(getActiveUserId);
	const dispatch = useDispatch();
	const [state, setState] = useState('');
	
	// TODO: test immutable!
	useEffect(()=>{
		console.log(activeId);
	},[activeId]);
	
	const clickHandler = (userId) => {
		dispatch(setActiveUser(userId));
	}
	
	const submitHandler = (e)=>{
		e.preventDefault();
		dispatch(setActiveUser(state));
	}
	
	return (
		<form className='users-page' onSubmit={submitHandler}>
			<input type="text" value={state} onChange={({target}) => setState(target.value)}/>
			<ul>
				{
					users.size
						? users.toList().map(user => {
							const userId = user.get('userId');
							const userName = user.get('userName');
							
							return (
								<li
									key={userId}
									onClick={() => clickHandler(userId)}
								>
									{`${userName}: ${userId}`}
								</li>
							)
						})
						: null
				}
			</ul>
		</form>
	)
}

export default UsersPage;