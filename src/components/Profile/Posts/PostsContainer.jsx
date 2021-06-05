import { connect } from 'react-redux'
import { addNewPost, updateNewPostText } from '../../../redux/profile/actions'
import store from '../../../redux/redux-store'
import Posts from './Posts'

const mapStateToProps = state => ({
	postList: state.profilePage.postList,
	newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = dispatch => ({
	onInputNewPost: e => dispatch(updateNewPostText(e.target.value)),
	onSendPost: e => {
		e.preventDefault()
		const newPostText = store.getState().profilePage.newPostText

		if (newPostText.trim()) {
			dispatch(addNewPost())
		}
	},
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
