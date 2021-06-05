import React from 'react'
import MessageItem from './MessageItem/MessageItem'
import s from './Messages.module.css'
import PropTypes from 'prop-types'
import {
	sendMessageCreator,
	updateNewMessageTextCreator,
} from '../../../redux/dialogs-reducer'

const Messages = ({ mList, dispatch, newMessageText }) => {
	const mItems = mList.map(message => (
		<MessageItem key={message.id} messageItem={message} />
	))

	const onChangeMsgText = e => {
		const action = updateNewMessageTextCreator(e.target.value)
		dispatch(action)
	}

	const onSendMsg = e => {
		e.preventDefault()
		const action = sendMessageCreator()

		if (newMessageText.trim()) {
			dispatch(action)
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
