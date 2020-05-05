import React from 'react'
import sass from './reminder.module.sass'

const Reminder = (props) => {
    return (
        <div className={sass.reminderMain}>
            <div className={sass.reminderContainer}>
                <h1 className={sass.reminderTitle}>Test assignment for frontend developer position</h1>
                <p className={sass.reminderParagraph}>We kindly remind you that your test assignment
                    should be submitted as a link to github/bitbucket repository. Please be patient,
                    we consider and respond to every application that meets minimum requirements. We
                    look forward to your submission. Good luck! The photo has to scale in the banner
                    area on the different screens</p>
                <p className={sass.reminderParagraphMobile}>We kindly remind you that your test
                    assignment should be submitted as a link to github/bitbucket repository.</p>
                {/* using link instead of button to allow it to transfer to registration */}
                <a href="#registrationPage">
                    <input className={sass.reminderButton} type="submit" value="Sign up now" />
                </a>
            </div>
        </div>
    )
}

export default Reminder