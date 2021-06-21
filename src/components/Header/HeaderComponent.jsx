import { Component } from 'react'
import { connect } from 'react-redux'
import { getMe } from '../../redux/auth/actions'
import Header from './Header'

class HeaderComponent extends Component {
	componentDidMount() {
		this.props.getMe()
	}

	render() {
		return <Header user={this.props.user} />
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	myProfile: state.auth.myProfile,
})

const dispatchFunctions = { getMe }

export default connect(mapStateToProps, dispatchFunctions)(HeaderComponent)
