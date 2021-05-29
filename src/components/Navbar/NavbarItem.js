import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import s from './Navbar.module.css'

const NavbarItem = ({ navbarObj }) => {
	return (
		<div className={s.item}>
			<Link to={navbarObj.link}>{navbarObj.title}</Link>
		</div>
	)
}

NavbarItem.propTypes = {
	navbarObj: PropTypes.object.isRequired,
}

export default NavbarItem
