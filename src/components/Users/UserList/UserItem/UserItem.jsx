import Avatar from './Avatar/Avatar'
import UserInfo from './UserInfo/UserInfo'
import FollowBtn from './FollowBtn/FollowBtn'
import UnfollowBtn from './UnfollowBtn/UnfollowBtn'

const UserItem = ({ user, followUser, unFollowUser, userPhoto }) => {
	const followBtn = <FollowBtn followUser={followUser} userId={user.id} />
	const unFollowBtn = <UnfollowBtn unFollowUser={unFollowUser} userId={user.id} />
	return (
		<div key={user.id}>
			<Avatar
				profileId={user.id}
				smallPhoto={user.photos.small}
				defaultPhoto={userPhoto}
			/>
			{user.followed ? unFollowBtn : followBtn}
			<UserInfo userName={user.name} status={user.status} />
		</div>
	)
}

export default UserItem
