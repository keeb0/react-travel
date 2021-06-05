import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './redux/redux-store'

render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
