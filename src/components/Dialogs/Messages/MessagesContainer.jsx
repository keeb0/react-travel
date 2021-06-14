import { connect } from 'react-redux'
import { sendMessage, updateNewMessage } from '../../../redux/dialogs/actions'
import store from '../../../redux/redux-store'
import Messages from './Messages'

const mapStateToProps = state => ({
	messageList: state.dialogsPage.messageList,
	newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = dispatch => ({
	onInputMsgText: e => dispatch(updateNewMessage(e.currentTarget.value)),
	onSendMsg: e => {
		const newMessageText = store.getState().dialogsPage.newMessageText
		e.preventDefault()

		if (newMessageText.trim()) {
			dispatch(sendMessage())
		}
	},
})

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer
