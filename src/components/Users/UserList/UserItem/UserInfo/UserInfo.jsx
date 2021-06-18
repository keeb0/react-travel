const UserInfo = ({ userName, status }) => {
	return (
		<span>
			<span>
				<div>{userName}</div>
				<div>{status}</div>
			</span>
			<span>
				<div>{'user.location.country'}</div>
				<div>{'user.location.city'}</div>
			</span>
		</span>
	)
}

export default UserInfo