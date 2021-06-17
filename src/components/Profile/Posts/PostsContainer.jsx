import { connect } from 'react-redux'
import { addNewPost, updateNewPostText } from '../../../redux/profile/actions'
import Posts from './Posts'

const mapStateToProps = state => ({
	postList: state.profilePage.postList,
	newPostText: state.profilePage.newPostText,
})

const dispatchFunctions = {
	updateNewPostText,
	addNewPost,
}

const PostsContainer = connect(mapStateToProps, dispatchFunctions)(Posts)

export default PostsContainer
