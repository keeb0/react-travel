import s from './UserList.module.css'
import { Link } from 'react-router-dom'

const UserList = ({ users, userPhoto, onToggleFollowing }) => {
	return (
		<div className="content">
			{users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<Link to={`/profile/${u.id}`}>
								<img
									src={u.photos.small || userPhoto}
									className={s.userPhoto}
								/>
							</Link>
						</div>
						<div>
							<button onClick={_ => onToggleFollowing(u.id)}>
								{u.followed ? 'Unfollow' : 'Follow'}
							</button>
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	)
}

export default UserList
