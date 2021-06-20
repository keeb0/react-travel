import { AUTHORIZE, SET_MY_PROFILE } from './types'

const initialState = {
	user: {
		email: null,
		id: null,
		login: null,
		isAuth: false,
	},
	myProfile: {
		aboutMe: null,
		contacts: {
			facebook: null,
			website: null,
			vk: null,
			twitter: null,
			instagram: null,
			youtube: null,
			github: null,
			mainLink: null,
		},
		lookingForAJob: null,
		lookingForAJobDescription: null,
		fullName: null,
		userId: null,
		photos: {
			small: null,
			large: null,
		},
	},
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHORIZE:
			return {
				...state,
				user: { ...state.user, ...action.data, isAuth: true },
			}

		case SET_MY_PROFILE:
			return {
				...state,
				myProfile: action.profile,
			}

		default:
			return state
	}
}

export default authReducer
