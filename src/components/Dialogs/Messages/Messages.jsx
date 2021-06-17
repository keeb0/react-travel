import MessageItem from './MessageItem/MessageItem'
import s from './Messages.module.css'
import PropTypes from 'prop-types'

const Messages = ({
	messageList,
	newMessageText,
	updateNewMessage,
	sendMessage,
}) => {
	const mItems = messageList.map(message => (
		<MessageItem key={message.id} message={message} />
	))

	const onSendMsg = e => {
		e.preventDefault()

		if (newMessageText.trim()) {
			sendMessage()
		}
	}

	const onInputMsgText = e => updateNewMessage(e.target.value)

	return (
		<div className={s.messages}>
			{mItems}
			<form>
				<input value={newMessageText} onInput={onInputMsgText} />
				<button onClick={onSendMsg}>Send</button>
			</form>
		</div>
	)
}

Messages.propTypes = {
	messageList: PropTypes.arrayOf(PropTypes.object).isRequired,
	newMessageText: PropTypes.string.isRequired,
	updateNewMessage: PropTypes.func.isRequired,
	sendMessage: PropTypes.func.isRequired,
}

export default Messages
