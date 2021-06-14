import UserItem from './UserItem/UserItem'

const UsersList = ({ userList, onToggleFollowing }) => {
	console.log(userList)

	const users = userList.map(user => (
		<UserItem key={user.id} user={user} onToggleFollowing={onToggleFollowing} />
	))

	return <div>{users}</div>
}

export default UsersList
