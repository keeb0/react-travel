import UserItem from './UserItem/UserItem'

const UserList = ({ users, userPhoto, followUser, unFollowUser }) => {
	return (
		<div className="content">
			{users.map(user => (
				<UserItem
					user={user}
					userPhoto={userPhoto}
					followUser={followUser}
					unFollowUser={unFollowUser}
					key={user.id}
				/>
			))}
		</div>
	)
}

export default UserList
