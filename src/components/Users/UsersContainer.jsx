import { connect } from 'react-redux'
import {
	getUsers,
	startLoading,
	toggleFollowing,
	updatePage,
} from '../../redux/users/actions'
import userPhoto from '../../assets/users/img/person-icon.png'
import { Component } from 'react'
import Pagination from './Pagination/Pagination'
import Loading from '../common/Loading/Loading'
import UsersList from './UserList/UsersList'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.startLoading()
		this.props.getUsers({
			page: this.props.currentPage,
			count: this.props.pageSize,
		})
	}

	render() {
		return (
			<div className="content">
				<Pagination
					totalItems={this.props.totalCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					updatePage={this.props.updatePage}
					startLoading={this.props.startLoading}
					getUsers={this.props.getUsers}
				/>

				<UsersList
					users={this.props.users}
					userPhoto={this.props.userPhoto}
					onToggleFollowing={this.props.toggleFollowing}
				/>
				{this.props.loading && <Loading />}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.users.items,
	totalCount: state.users.totalCount,
	pageSize: state.users.pageSize,
	currentPage: state.users.currentPage,
	loading: state.users.isLoading,
	userPhoto,
})

const dispatchObj = { startLoading, getUsers, toggleFollowing, updatePage }

export default connect(mapStateToProps, dispatchObj)(UsersContainer)
