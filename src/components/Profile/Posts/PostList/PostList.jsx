import PostItem from './PostItem/PostItem'
import s from './PostList.module.css'

const PostList = ({ postList, dispatch }) => {
	const postComponents = postList.map(post => <PostItem key={post.id} post={post}/>)

	return <div>{postComponents}</div>
}

export default PostList
