import { ADD_NEW_POST, SET_USER_DATA, UPDATE_NEW_POST_TEXT } from './types'

export const updateNewPostText = newText => ({
	type: UPDATE_NEW_POST_TEXT,
	newText,
})

export const addNewPost = () => ({
	type: ADD_NEW_POST,
})

export const setUserData = data => ({ type: SET_USER_DATA, data })
