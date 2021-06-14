import { connect } from 'react-redux'
import { getUsers, toggleFollowing } from '../../redux/users/actions'
import Users from './UsersC'
import userPhoto from '../../assets/users/img/person-icon.png'

const mapStateToProps = state => ({
	users: state.users.items,
	userPhoto,
})
const mapDispatchToProps = dispatch => ({
	setUsers() {
		dispatch(getUsers())
	},
	onToggleFollowing(userId) {
		dispatch(toggleFollowing(userId))
	},
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
