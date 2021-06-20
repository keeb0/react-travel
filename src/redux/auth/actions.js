import { AUTHORIZE, SET_MY_PROFILE } from './types'

export const authorize = ({ id, email, login }) => ({
	type: AUTHORIZE,
	data: { id, email, login },
})

export const setMyProfile = profile => ({
	type: SET_MY_PROFILE,
	profile,
})
