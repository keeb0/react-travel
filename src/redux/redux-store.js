import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './auth/dialogs-reducer'
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

export default store
