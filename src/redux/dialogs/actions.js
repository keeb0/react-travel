import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from './types'

export const updateNewMessage = newText => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText,
})

export const sendMessage = () => ({ type: SEND_MESSAGE })
