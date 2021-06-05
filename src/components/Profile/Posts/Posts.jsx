import PostList from './PostList/PostList'
import s from './Posts.module.css'
import {
	updateNewPostTextActionCreator,
	addNewPostActionCreator,
} from '../../../redux/profile-reducer'

const Posts = ({ postList, dispatch, newPostText }) => {
	const onInputNewText = e => {
		const action = updateNewPostTextActionCreator(e.target.value)
		dispatch(action)
	}

	const onSendPost = e => {
		e.preventDefault()
		if (!newPostText.length) {
			return
		}
		const action = addNewPostActionCreator()
		dispatch(action)
	}

	return (
		<div className={s.posts}>
			<div className={s.my_posts}>
				<div>My posts</div>
				<form>
					<textarea
						cols="102"
						rows="6"
						value={newPostText}
						onInput={onInputNewText}
					></textarea>
					<div className={s.send_btn}>
						<button onClick={onSendPost}>Send</button>
					</div>
				</form>
			</div>

			<PostList postList={postList} dispatch={dispatch} />
		</div>
	)
}

export default Posts
