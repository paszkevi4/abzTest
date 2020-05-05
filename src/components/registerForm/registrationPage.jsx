import React, {useEffect, useState} from 'react'
import sass from './registrationPage.module.sass'
import Form from './form'
import {connect} from 'react-redux'
import {apiRequest} from '../../API/api'
import {setTokenThunk, setPositionsThunk} from '../../Redux/regReducer'
import {setUpdatedUsersThunk} from '../../Redux/usersReducer'
import x from './../../assets/x.png'
import ModalWindow from "./modalWindow";

const RegistrationPage = (props) => {

    /*request relevant token and vacant positions*/
    useEffect( () => {
        props.setTokenThunk()
        props.setPositionsThunk()
    }, [])

    /*modal window state. is not shown by default*/
    let [showModal, setShowModal] = useState (false)

    /*function changes modal window state*/
    const switchModal = () => {
        setShowModal(!showModal)
    }

    /*local state used for holding uploaded photo name to show it in custom input*/
    let [photo, addPhoto] = useState (null)

    /*function overwrites uploaded photo name */
    const onPhotoAdded = (event) => {
        addPhoto(event.target.files[0])
    }

    /*function called once submiting valid form initiated. shows modal window, sends data to server
    and requests new users data*/
    const onSubmit = async(formData) => {
        setShowModal(!showModal)
        await (apiRequest.register(formData.name, formData.email, formData.phone,
            Number(formData.position_id), photo, props.token) )
        props.setUpdatedUsersThunk()
    }

    return (
        <div className={sass.registrationPage}>
            <a className={sass.regAnchor} name="registrationPage"></a>
            <h1>Register to get a work</h1>
            <p className={sass.regSubtitle}>Attention! After successful registration and alert,
                update the list of users in the block from the top</p>
            <Form onSubmit={onSubmit} positions={props.positions} onPhotoAdded={onPhotoAdded}/>
            { showModal ? <ModalWindow switchModal={switchModal}/> : null }
        </div>
    )
}

/*connecting component to store*/
const mapStateToProps = (state) => {
    return {
        token: state.regData.token,
        positions: state.regData.positions
    }
}

const RegistrationPageContainer = connect (mapStateToProps, {setTokenThunk, setPositionsThunk, setUpdatedUsersThunk})(RegistrationPage)

export default RegistrationPageContainer