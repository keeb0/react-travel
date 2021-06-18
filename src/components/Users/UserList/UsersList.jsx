import UserItem from './UserItem/UserItem'

const UserList = ({ users, userPhoto, onToggleFollowing }) => {
	return (
		<div className="content">
			{users.map(user => (
				<UserItem
					user={user}
					userPhoto={userPhoto}
					onToggleFollowing={onToggleFollowing}
					key={user.id}
				/>
			))}
		</div>
	)
}

export default UserList
