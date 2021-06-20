const FollowBtn = ({ followUser, userId }) => {
	return (
		<div>
			<button onClick={followUser.bind(null, userId)}>Follow</button>
		</div>
	)
}

export default FollowBtn
