import MyInfo from './MyInfo/MyInfo'
import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'

const Profile = ({ user }) => {
	console.log(user)
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
			/>
			<PostsContainer />
		</div>
	)
}

export default Profile
