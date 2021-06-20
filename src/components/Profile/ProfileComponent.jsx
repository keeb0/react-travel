import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Profile from './Profile'
import { getUserProfile } from '../../redux/profile/actions'

class ProfileComponent extends Component {
	componentDidMount() {
		const userId = this.props.match.params.userId || 2

		this.props.getUserProfile(userId)
	}

	render() {
		return <Profile user={this.props.user} />
	}
}

const mapStateToProps = state => ({
	user: state.profilePage.user,
})
const dispatchFunctions = { getUserProfile }

const WithUrlDataComponent = withRouter(ProfileComponent)

export default connect(mapStateToProps, dispatchFunctions)(WithUrlDataComponent)
