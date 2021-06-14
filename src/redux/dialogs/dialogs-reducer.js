import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from './types'

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

const dialogsReducer = (state = initialState, action) => {
	const stateCopy = { ...state }
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			stateCopy.newMessageText = action.newText
			return stateCopy

		case SEND_MESSAGE:
			const newMessage = {
				id: Date.now(),
				text: state.newMessageText,
				mine: true,
			}

			stateCopy.messageList = [...state.messageList]
			stateCopy.messageList.push(newMessage)
			stateCopy.newMessageText = ''
			return stateCopy

		default:
			return state
	}
}

export default dialogsReducer
