import React from 'react'
import MessageItem from './MessageItem/MessageItem'
import s from './Messages.module.css'
import PropTypes from 'prop-types'

const Messages = ({ mList, dispatch, newMessageText }) => {
	const mItems = mList.map(message => (
		<MessageItem key={message.id} messageItem={message} />
	))

	const onChangeMsgText = e => {
		dispatch({
			type: 'UPDATE-NEW-MESSAGE-TEXT',
			text: e.target.value,
		})
	}

	const onSendMsg = e => {
		e.preventDefault()

		if (newMessageText.trim()) {
			dispatch({
				type: 'SEND-MESSAGE',
				text: newMessageText,
			})
		}
	}

	return (
		<div className={s.messages}>
			{mItems}
			<form>
				<input type="text" value={newMessageText} onChange={onChangeMsgText} />
				<button onClick={onSendMsg}>Send</button>
			</form>
		</div>
	)
}

Messages.propTypes = {
	// state: PropTypes.object.isRequired,
}

export default Messages
