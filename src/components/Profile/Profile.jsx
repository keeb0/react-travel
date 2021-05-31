import MyInfo from './MyInfo/MyInfo'
import Posts from './Posts/Posts'
import s from './Profile.module.css'

const Profile = ({ state, dispatch }) => {
	return (
		<div className={s.profile}>
			<div className={s.background_img}>
				<img src="https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png" />
			</div>
			<MyInfo />
			<Posts
				postList={state.postList}
				dispatch={dispatch}
				newPostText={state.newPostText}
			/>
		</div>
	)
}

export default Profile
