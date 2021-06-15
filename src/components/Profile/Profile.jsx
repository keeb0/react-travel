import MyInfo from './MyInfo/MyInfo'
import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'

const Profile = () => {
	return (
		<div className={'content'}>
			<div className={s.background_img}>
				<img src="https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png" />
			</div>
			<MyInfo />
			<PostsContainer />
		</div>
	)
}

export default Profile
