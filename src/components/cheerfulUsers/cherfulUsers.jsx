import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import User from './user'
import sass from './cheerfulUsers.module.sass'
import {setUsersThunk} from './../../Redux/usersReducer'

const CheerfulUsers = (props) => {

    /*local state for current userPage*/
    let [page, setPage] = useState(1)

    /*function for getting users from next usersPage*/
    const loadUsers = () => {
        setPage(++page)
        props.setUsersThunk(page)
    }

    /*requesting users*/
    useEffect( () => {
        props.setUsersThunk(page)
    }, [])

    /*creating JSX with users data*/
    let users = props.usersData.users.map ((el) => <User key={el.id} photo={el.photo}
                                                         name={el.name} position={el.position}
                                                         email={el.email} phone={el.phone}/>)
    return (
        <div className={sass.cheerfulUsersMain}>
            <a className={sass.userAnchor} name="usersPage"></a>
            <h1 className={sass.usersTitle}>Our cheerful users</h1>
            <p className={sass.usersSubtitle}>Attention! Sorting users by registration date</p>
            <div className={sass.userCards}>
                {users}
            </div>
            {/*button will not be shown if all the users are loaded*/}
            { props.usersData.total > page && <button className={sass.usersButton} onClick={loadUsers}>Show more</button> }

        </div>
    )
}

/*connecting component to store*/
const mapStateToProps = (state) => {
    return { usersData: state.usersData }
}

const CheerfulUsersContainer = connect (mapStateToProps, {setUsersThunk})(CheerfulUsers)

export default CheerfulUsersContainer