const FollowBtn = ({ onToggleFollowing, followed, userId }) => {
	return (
		<div>
			<button onClick={onToggleFollowing.bind(null, userId)}>
				{followed ? 'Unfollow' : 'Follow'}
			</button>
		</div>
	)
}

export default FollowBtn
