import React, {useState} from 'react'
import sass from "./modalWindow.module.sass";
import x from "../../assets/x.png";

const ModalWindow = (props) => {
    return (
        /*both clicks on "Great" button and "X" button transfer page to users component that is up to date*/
        <div className={sass.modal} >
            <div className={sass.modalInner} >
                <div>
                    <h2>Congratulations</h2>
                    <a href="#usersPage">
                        <img className={sass.xButton} onClick={sass.switchModal} src={x} alt="x"/>
                    </a>
                </div>
                <div>You have successfully passed the registration</div>
                <div>
                    <a href="#usersPage">
                        <input onClick={props.switchModal} className={sass.modalButton} type="submit" value="Great" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow