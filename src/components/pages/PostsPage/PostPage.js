import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getActiveUserId} from "../../../store/selectors/users";
import {getPosts as getPostsAction} from "../../../store/reducers/posts/actions";
import {getPosts} from "../../../store/selectors/posts";

const PostsPage = () => {
	const userId = useSelector(getActiveUserId);
	const dispatch = useDispatch();
	const posts = useSelector(getPosts);
	
	useEffect(() => {
		if(userId) {
			dispatch(getPostsAction(userId));
		}
	}, [userId]);
	
	return (
		<ul className="posts-page">
			{
				posts.size
					? posts.map(post => (
						<li key={post.get('id')}>
							<h3>{post.get('title')}</h3>
							<p>{post.get('body')}</p>
						</li>
					))
					: null
			}
		</ul>
	)
}

export default PostsPage;