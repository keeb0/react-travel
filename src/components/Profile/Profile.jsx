import MyInfo from './MyInfo/MyInfo'
import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'
import defaultAvatar from '../../assets/users/img/person-icon.png'

const Profile = ({ user }) => {
	return (
		<div className={'content'}>
			<div className={s.background_img}>
				<img src="https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png" />
			</div>
			<MyInfo
				fullName={user.fullName}
				aboutMe={user.aboutMe}
				userPhoto={user.photos && user.photos.large}
				lookingForAJob={user.lookingForAJob}
				lookingForAJobDescription={user.lookingForAJobDescription}
				defaultAvatar={defaultAvatar}
			/>
			<PostsContainer />
		</div>
	)
}

export default Profile
