import s from './MyInfo.module.css'

const MyInfo = () => {
	return (
		<div className={s.my_info}>
			<div className={s.my_avatar}>
				<img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
			</div>
			<div>
				<div className={s.my_name}>Marat</div>
				<div className={s.info}>
					<div>Date of Birth: 1 november</div>
					<div>City: Bishkek</div>
					<div>Education: I'm stupid</div>
					<div>Web Site: none</div>
				</div>
			</div>
		</div>
	)
}

export default MyInfo
