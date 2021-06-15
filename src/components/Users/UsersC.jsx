import s from './Users.module.css'
import { Component } from 'react'
import Pagination from './Pagination/Pagination'

class Users extends Component {
  componentDidMount() {
    this.props.setUsers()
  }

  render() {
    return (
      <div className="content">
        {this.props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : this.props.userPhoto
                  }
                  className={s.userPhoto}
                />
              </div>
              <div>
                <button onClick={_ => this.props.onToggleFollowing(u.id)}>
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
        <Pagination />
      </div>
    )
  }
}

export default Users
