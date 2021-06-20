const UnfollowBtn = ({ unFollowUser, userId }) => {
	return (
		<div>
			<button onClick={unFollowUser.bind(null, userId)}>Unfollow</button>
		</div>
	)
}

export default UnfollowBtn
