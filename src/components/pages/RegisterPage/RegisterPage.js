import {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, serUserFields} from "../../../store/reducers/users/actions";
import {getUserFields} from "../../../store/selectors/users";

import './index.scss';

const RegisterPage = () => {
	const defaultState = useSelector(getUserFields);
	const [state, setState] = useState(defaultState);
	
	const inputData = useRef(state);
	
	const dispatch = useDispatch();
	
	
	useEffect(() => {
		inputData.current = state;
	}, [state]);
	
	useEffect(() => {
		return () => dispatch(serUserFields(inputData.current))
	}, [])
	
	const handleChange = ({target}) => {
		setState({
			...state,
			[target.name]: target.value
		});
	}
	
	const submitHandler = async (e) => {
		e.preventDefault();
		
		await dispatch(addUser(state.userName, state.userId));
		setState({
			userName: '',
			userId: '',
		});
	}
	
	return (
		<form className="register-page" onSubmit={submitHandler}>
			<label htmlFor="registerPageName">Name:</label>
			<input required id="registerPageName" type="text" value={state.userName} name="userName"
			       onChange={handleChange} />
			<br />
			<label htmlFor="registerPageNumber">Namber (1-10)</label>
			<input required pattern="[0-9]+" type="registerPageNumber" value={state.userId} name="userId"
			       onChange={handleChange} />
			<br />
			<button type="submit" className="register-page_submit-button">submit</button>
		</form>
	)
}

export default RegisterPage;
