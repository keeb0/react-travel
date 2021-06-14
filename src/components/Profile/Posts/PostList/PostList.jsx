import PropTypes from 'prop-types'
import PostItem from './PostItem/PostItem'
import s from './PostList.module.css'

const PostList = ({ postList }) => {
	const postComponents = postList.map(post => (
		<PostItem key={post.id} post={post} />
	))

	return <div>{postComponents}</div>
}

PostList.propTypes = {
	postList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostList
