import s from './Avatar.module.css'
import { Link } from 'react-router-dom'

const Avatar = ({ profileId, smallPhoto, defaultPhoto }) => {
	return (
		<div>
			<Link to={`/profile/${profileId}`}>
				<img src={smallPhoto || defaultPhoto} className={s.userPhoto} />
			</Link>
		</div>
	)
}
export default Avatar
