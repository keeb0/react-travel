import PropTypes from 'prop-types'
import { Link, link } from 'react-router-dom'
import s from './NavigationItem.module.css'

function NavigationItem({ navItem }) {
	return (
		<div className={s.item}>
			<Link to={navItem.link} className={s.link}>
				{navItem.title}
			</Link>
		</div>
	)
}

NavigationItem.propTypes = {
	navItem: PropTypes.object.isRequired,
}

export default NavigationItem
