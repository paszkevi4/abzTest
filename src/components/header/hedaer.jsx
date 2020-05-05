import React, {useState} from 'react'
import sass from './header.module.sass'
import '../../app.sass'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu-icon.svg'
const Header = (props) => {

    // initial state for tablet menu set to false
    let [menuShowed, setMenuShowed] = useState (false)

    return (
        <header>
            <div className={sass.logo}><img src={logo} alt="logo"/></div>
            <div className='menu'>
                <ul className={sass.ulMenu}>
                    <li><a href="#registrationPage">About me</a></li>
                    <li><a href="#registrationPage">Relationships</a></li>
                    <li><a href="#registrationPage">Requirements</a></li>
                    <li><a href="#registrationPage">Users</a></li>
                    <li><a href="#registrationPage">Sign up</a></li>
                </ul>
            </div>
            <div className='menuIcon'>
                {/* onClick sets menu state to be shown */}
                <img src={menu} alt="menu icon" onClick={ () => {setMenuShowed(!menuShowed)} }/>
            </div>
            {/* changes styles to be shown or hidden considering the state */}
            {/* onClick sets menu state to be hidden */}
            <div className={`${sass.menuTabletMain} ${menuShowed ? sass.showed : ''}`}
                 onClick={ () => {setMenuShowed(!menuShowed)} }>
            </div>
            {/* changes styles to be shown or hidden considering the state */}
            <div className={`${sass.menuTablet} ${menuShowed ? sass.showed : ''}`}>
                <div className={sass.menuTabletImg}>
                    <img src={logo} alt="logo"/>
                </div>
                <ul>
                    <li><a href="#registrationPage">About me</a></li>
                    <li><a href="#registrationPage">Relationships</a></li>
                    <li><a href="#registrationPage">Users</a></li>
                    <li><a href="#registrationPage">Sign up</a></li>
                    <li><a href="#registrationPage">Terms and Conditions</a></li>
                </ul>
                <ul>
                    <li><a href="#registrationPage">How it works</a></li>
                    <li><a href="#registrationPage">Partnership</a></li>
                    <li><a href="#registrationPage">Help</a></li>
                    <li><a href="#registrationPage">Leave testimonials</a></li>
                    <li><a href="#registrationPage">Contact us</a></li>
                </ul>
                <ul>
                    <li><a href="#registrationPage">Articles</a></li>
                    <li><a href="#registrationPage">Our news</a></li>
                    <li><a href="#registrationPage">Testimonials</a></li>
                    <li><a href="#registrationPage">Licenses</a></li>
                    <li><a href="#registrationPage">Privacy policy</a></li>
                </ul>
            </div>
        </header>

    )
}
export default Header