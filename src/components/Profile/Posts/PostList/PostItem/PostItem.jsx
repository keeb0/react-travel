import PropTypes from 'prop-types'
import s from './PostItem.module.css'

const PostItem = ({ post }) => {
	return (
		<div className={s.post}>
			<img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
			<span>{post.text}</span>
		</div>
	)
}

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
}

export default PostItem
