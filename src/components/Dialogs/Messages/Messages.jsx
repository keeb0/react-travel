import MessageItem from './MessageItem/MessageItem'
import s from './Messages.module.css'
import PropTypes from 'prop-types'

const Messages = ({
	messageList,
	newMessageText,
	onInputMsgText,
	onSendMsg,
}) => {
	const mItems = messageList.map(message => (
		<MessageItem key={message.id} message={message} />
	))

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
	onInputMsgText: PropTypes.func.isRequired,
	onSendMsg: PropTypes.func.isRequired,
}

export default Messages
