import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	// withCredentials: true,
	// headers: { 'API-KEY': 'b1afa7fc-0f01-456c-a50e-546d466931a4' },
})

const getResponseData = response => response.data

export const userAPI = {
	getUsers(params) {
		return instance.get('users', { params }).then(getResponseData)
	},
}

export const followAPI = {
	followUser(userId) {
		return instance.post(`follow/${userId}`).then(getResponseData)
	},
	unFollowUser: userId =>
		instance.delete(`follow/${userId}`).then(getResponseData),
}

export const authAPI = {
	getMe: () => instance.get('auth/me').then(getResponseData),
}

export const profileAPI = {
	getProfile: userId => instance.get(`profile/${userId}`).then(getResponseData),
}
