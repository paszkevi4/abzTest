import React from 'react'
import avatar from './photo-cover.svg'
import sass from './cheerfulUsers.module.sass'

const User = (props) => {
    return (
        <div className={sass.userCard}>
            <div>
                <img className={sass.userAvatar} src={ !props.photo ? avatar : props.photo}/>
            </div>
            <h2 className={sass.userName}>
                {props.name}
            </h2>
            <p className={sass.userPosition}>{props.position}</p>
            <div className={sass.userEmail}>
                <p className={sass.userEmailMain}>{props.email}</p>
                <span className={sass.userEmailTooltip}>{props.email}</span>
            </div>
            <p className={sass.userPhone}>{props.phone}</p>
        </div>
    )
}

export default User