import Avatar from './Avatar/Avatar'
import UserInfo from './UserInfo/UserInfo'
import FollowBtn from './FollowBtn/FollowBtn'

const UserItem = ({ user, onToggleFollowing, userPhoto }) => {
	return (
		<div key={user.id}>
			<Avatar
				profileId={user.id}
				smallPhoto={user.photos.small}
				defaultPhoto={userPhoto}
			/>
			<FollowBtn
				onToggleFollowing={onToggleFollowing}
				userId={user.id}
				followed={user.followed}
			/>
			<UserInfo userName={user.name} status={user.status} />
		</div>
	)
}

export default UserItem
