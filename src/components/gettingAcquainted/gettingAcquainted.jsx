import React from 'react'
import sass from './gettingAcquainted.module.sass'
import manLaptop from './../../assets/man-laptop-v1.svg'

const Acquainted = (props) => {
    return (
        <div id='abc'className={sass.acqMain}>
            <h1>Let's get acquainted </h1>
            <div className={sass.acqImg}>
                <img src={manLaptop} alt="manLaptop"/>
            </div>
            <div className={sass.acqContainer}>
                <h2 className={sass.acqHeader}>I am cool frontend developer</h2>
                <p>We will evaluate how clean your approach to writing CSS and Javascript code is.
                    You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
                <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get
                    bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well.
                    Slice service directory page PSD mockup into HTML5/CSS3.</p>
                {/* using link instead of button to allow it to transfer to registration */}
                <div>
                    <a href="#registrationPage" className={sass.acqButton}> Sign up now </a>
                </div>
            </div>
        </div>


    )
}

export default Acquainted