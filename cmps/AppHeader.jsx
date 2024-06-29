const { Link, NavLink } = ReactRouterDOM
import { mailService } from "../apps/mail/services/mail.service.js"
const { useState } = React


export function AppHeader() {
    const [displayNav, setDisplayNav] = useState(false)

    function toggleDisplay() {
        setDisplayNav(prevDisplay => !prevDisplay)
    }

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>

        <div className="app-header-right-handside">
            <NavLink className="home" title="Home" to="/">Home</NavLink>
            <NavLink className="about" title="About" to="/about">About</NavLink>
            <nav className={`main-nav ${displayNav ? '' : 'display-none'}`}>
                <NavLink to="/mail" onClick={toggleDisplay}>
                    <img src="./assets/img/gmail-icon.png" alt="" />
                    <span>Gmail</span>
                </NavLink>
                <NavLink to="/note" onClick={toggleDisplay}>
                    <img src="./assets/img/keep-icon.png" alt="" />
                    <span>Keep</span>
                </NavLink>
            </nav>
            <button className="apps-icon material-icons" title="Apps" onClick={toggleDisplay}>apps
            </button>
            <button className="user-icon">{mailService.getUserName()[0]}</button>
        </div>
    </header>
}
