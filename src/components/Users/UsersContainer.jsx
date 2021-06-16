import { connect } from 'react-redux'
import {
	getUsers,
	startLoading,
	toggleFollowing,
	updatePage,
} from '../../redux/users/actions'
import Users from './UsersC'
import userPhoto from '../../assets/users/img/person-icon.png'

const mapStateToProps = state => ({
	users: state.users.items,
	userPhoto,
	totalCount: state.users.totalCount,
	pageSize: state.users.pageSize,
	currentPage: state.users.currentPage,
	loading: state.users.loading,
})
const mapDispatchToProps = dispatch => ({
	setUsers() {
		dispatch(startLoading())
		dispatch(getUsers())
	},
	onToggleFollowing(userId) {
		dispatch(toggleFollowing(userId))
	},
	onClickPage(newPage, e) {
		{
			e.preventDefault()
			dispatch(startLoading())
			dispatch(updatePage(newPage))
			dispatch(getUsers())
		}
	},
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
