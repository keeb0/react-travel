import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './auth/auth-reducer'
import dialogsReducer from './dialogs/dialogs-reducer'
import profileReducer from './profile/profile-reducer'
import usersReducer from './users/users-reducer'

const rootReducer = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	users: usersReducer,
	auth: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store
export default store
