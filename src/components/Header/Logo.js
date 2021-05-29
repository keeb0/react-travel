import logo from './logo.png'
import s from './Logo.module.css'
import { Link } from 'react-router-dom'

function Logo() {
	return (
		<div className="logo">
			<Link to="/">
				<img src={logo} className={s.logo_icon} />
			</Link>
		</div>
	)
}

export default Logo
