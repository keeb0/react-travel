const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
	dialogList: [
		{ id: 1, title: 'Mark', message: 'Hi' },
		{ id: 2, title: 'Tom', message: 'Hi' },
		{ id: 3, title: 'Masha', message: 'Hi' },
	],
	messageList: [
		{ id: 1, text: 'hello', mine: true },
		{ id: 2, text: 'hi' },
		{ id: 3, text: 'how are you?', mine: true },
		{ id: 4, text: 'good' },
		{ id: 5, text: 'and you?' },
	],
	newMessageText: '',
}

const dialogsReducer = (state = initialState, { type, text }) => {
	switch (type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = text
			return state

		case SEND_MESSAGE:
			const newMessageText = state.newMessageText

			if (typeof newMessageText === 'string' && !newMessageText.trim()) {
				throw new Error('text must be not empty string')
			}

			const newMessage = {
				id: Date.now(),
				text: newMessageText,
				mine: true,
			}

			state.messageList.push(newMessage)
			state.newMessageText = ''
			return state
		default:
			return state
	}
}

export const updateNewMessageTextCreator = text => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	text,
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer
