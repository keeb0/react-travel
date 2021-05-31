import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import s from './NavbarItem.module.css'

const NavbarItem = ({ navbarObj }) => {
	return (
		<div className={s.item}>
			<NavLink to={navbarObj.link} activeClassName={s.active}>{navbarObj.title}</NavLink>
		</div>
	)
}

NavbarItem.propTypes = {
	navbarObj: PropTypes.object.isRequired,
}

export default NavbarItem
