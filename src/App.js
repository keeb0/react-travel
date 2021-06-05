import { Route, Switch } from 'react-router-dom'
import './App.css'
import Context from './Context'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Advertisement from './components/Advertisement/Advertisement'
import Dialogs from './components/Dialogs/Dialogs'

function App() {
	return (
		<div>
			<Header />
			<div className="main-wrapper">
				<Navbar />
				<div className="main-wrapper-content">
					<Switch>
						<Route path="/advertisment" component={Advertisement} />
						<Route path="/messages" render={Dialogs} />
						<Route path="/profile" render={Profile} />
						<Route path="/login" component={Login} />
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default App
