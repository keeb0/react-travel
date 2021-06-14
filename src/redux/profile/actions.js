import { ADD_NEW_POST, UPDATE_NEW_POST_TEXT } from './types'

export const updateNewPostText = newText => ({
	type: UPDATE_NEW_POST_TEXT,
	newText,
})

export const addNewPost = () => ({
	type: ADD_NEW_POST,
})
