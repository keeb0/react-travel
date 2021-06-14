import { connect } from 'react-redux'
import store from '../../../redux/redux-store'
import { toggleFollowing, getUsers } from '../../../redux/users/actions'
import UsersList from './UsersList'

const mapStateToProps = s => ({
	userList: s.users.items,
})

store.dispatch(getUsers())

const mapDispatchToProps = d => ({
	onToggleFollowing: userId => {
		d(toggleFollowing(userId))
	},
})

const UsersListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersList)

export default UsersListContainer
