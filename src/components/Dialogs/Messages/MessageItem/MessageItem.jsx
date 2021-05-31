import s from './MessageItem.module.css'
import PropTypes from 'prop-types'

const MessageItem = ({ messageItem }) => {
	const className = messageItem.mine
		? `${s.message_item} ${s.mine}`
		: s.message_item

	return (
		<div className={className}>
			<div className={s.text}>{messageItem.text}</div>
		</div>
	)
}

MessageItem.propTypes = {
	messageItem: PropTypes.object.isRequired,
}

export default MessageItem
