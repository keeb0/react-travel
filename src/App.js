import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Advertisement from './components/Advertisement/Advertisement'
import Dialogs from './components/Dialogs/Dialogs'
import UsersContainer from './components/Users/UsersContainer'
import ProfileComponent from './components/Profile/ProfileComponent'

function App() {
	return (
		<div>
			<Header />
			<div className="main-wrapper">
				<Navbar />
				<div className="main-wrapper-content">
					<Switch>
						<Route path="/advertisment" component={Advertisement} />
						<Route path="/messages" component={Dialogs} />
						<Route path="/profile" component={ProfileComponent} />
						<Route path="/login" component={Login} />
						<Route exact path="/users" component={UsersContainer} />
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default App
