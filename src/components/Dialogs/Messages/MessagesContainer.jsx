import { connect } from 'react-redux'
import { sendMessage, updateNewMessage } from '../../../redux/dialogs/actions'
import Messages from './Messages'

const mapStateToProps = state => ({
	messageList: state.dialogsPage.messageList,
	newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = dispatch => ({
	updateNewMessage: newMessageText =>
		dispatch(updateNewMessage(newMessageText)),
	sendMessage: () => {
		dispatch(sendMessage())
	},
})

const dispatchFunctions = { updateNewMessage, sendMessage }
const MessagesContainer = connect(mapStateToProps, dispatchFunctions)(Messages)

export default MessagesContainer
