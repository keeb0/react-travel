import PropTypes from 'prop-types'
import PostList from './PostList/PostList'
import s from './Posts.module.css'

const Posts = ({ postList, newPostText, updateNewPostText, addNewPost }) => {
	const onSendPost = e => {
		e.preventDefault()

		if (newPostText.trim()) {
			addNewPost()
		}
	}
	const onInputNewPost = e => updateNewPostText(e.target.value)

	return (
		<div className={s.posts}>
			<div className={s.my_posts}>
				<div>My posts</div>
				<form>
					<textarea
						cols="121"
						rows="6"
						value={newPostText}
						onInput={onInputNewPost}
					></textarea>
					<div className={s.send_btn}>
						<button onClick={onSendPost}>Send</button>
					</div>
				</form>
			</div>

			<PostList postList={postList} />
		</div>
	)
}

Posts.propTypes = {
	postList: PropTypes.arrayOf(PropTypes.object).isRequired,
	newPostText: PropTypes.string.isRequired,
	updateNewPostText: PropTypes.func.isRequired,
	addNewPost: PropTypes.func.isRequired,
}

export default Posts
