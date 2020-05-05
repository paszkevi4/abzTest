import React, {useState} from 'react'
import sass from './registrationPage.module.sass'
import {Field, reduxForm} from 'redux-form'
import {required} from './FormExtras/validator'
import {Input, FileInput} from './FormExtras/customInput'

const Form = (props) => {

    let [placeHolder, setPlaceHolder] = useState('Upload your photo')
    const onPhotoAdded = (event) => {
        props.onPhotoAdded (event)
        { event.target.files[0]
            ? setPlaceHolder(event.target.files[0].name)
            : setPlaceHolder('Choose files')}
    }

    return (
        <form className={sass.form} onSubmit={props.handleSubmit}>
            <div className={sass.container}>
                <div className={sass.personalInfo}>
                    <label htmlFor='check1'>Name</label>
                    <Field className={sass.personalInfoInput} id='check1' component={Input} name={'name'}
                           placeholder={'Your name'} validate={[required]}/>
                    <label htmlFor='check2'>Email</label>
                    <Field className={sass.personalInfoInput} id='check2' component={Input} name={'email'}
                           placeholder={'Your email'} validate={[required]}/>
                    <label htmlFor='check3'>Phone number</label>
                    <Field className={sass.personalInfoInput} id='check3' component={Input} name={'phone'}
                           placeholder={'+380 XX XXX XX XX'} validate={[required]}/>
                    <h5>Enter phone number in open format</h5>
                </div>
                <div className={sass.wantedPosition}>
                    <p>Select your position</p>
                    <label className={sass.radio}>
                        <Field component={'input'} type="radio" name="position_id" value={'1'} />
                        {props.positions[0] && <>{props.positions[0].name}</>}
                        <span className={sass.checkmark}></span>
                    </label>
                    <label className={sass.radio}>
                        <Field component={'input'} type="radio" name="position_id" value={'2'}/>
                        {props.positions[1] && <>{props.positions[1].name}</>}
                        <span className={sass.checkmark}></span>
                    </label>
                    <label className={sass.radio}>
                        <Field component={'input'} type="radio" name="position_id" value={'4'}/>
                        {props.positions[2] && <>{props.positions[2].name}</>}
                        <span className={sass.checkmark}></span>
                    </label>
                    <label className={sass.radio}>
                        <Field component={'input'} type="radio" name="position_id" value={'3'}/>
                        {props.positions[3] && <>{props.positions[3].name}</>}
                        <span className={sass.checkmark}></span>
                    </label>
                </div>
                <p>Photo</p>
                <div className={`${sass.personalInfo} ${sass.fileInputContainer}`} data-controller="file-input">
                    <input className={sass.fileInput} type="text" placeholder={placeHolder} readOnly />
                    <input className={sass.inputNotToShow} onChange={onPhotoAdded} type="file" id="customFile" data-target="file-input.input"
                               data-action="file-input#display" />
                    <label className={sass.fileInputBtn} htmlFor="customFile">Browse</label>
                </div>
            </div>
            <button className={sass.registrationButton}>Sign up now</button>
        </form>
    )
}

export default reduxForm ({form: 'registration'}) (Form)