import s from './MessageItem.module.css'
import PropTypes from 'prop-types'

const MessageItem = ({ message }) => {
	const messageClass = message.mine
		? `${s.message_item} ${s.mine}`
		: s.message_item

	return (
		<div className={messageClass}>
			<div className={s.text}>{message.text}</div>
		</div>
	)
}

MessageItem.propTypes = {
	message: PropTypes.object.isRequired,
}

export default MessageItem
