import s from './MyInfo.module.css'
import jobSeeker from '../../../assets/profile/img/job-seeker.png'

const MyInfo = ({ fullName, aboutMe, userPhoto, lookingForAJob }) => {
	return (
		<div className={s.my_info + ' container'}>
			<div className={s.my_avatar}>
				<img src={userPhoto} />
			</div>
			<div>
				<div className={s.my_name}>{fullName}</div>
				<div className={s.info}>
					<div>{aboutMe}</div>
					<div>{lookingForAJob && <img src={jobSeeker} />}</div>
				</div>
			</div>
		</div>
	)
}

export default MyInfo
