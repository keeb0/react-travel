import s from './Users.module.css'

const Users = ({ users, userPhoto, onToggleFollowing }) => {
	return (
		<div className="content">
			{users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small || userPhoto} className={s.userPhoto} />
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

export default Users
