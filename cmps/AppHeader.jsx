const { Link, NavLink } = ReactRouterDOM
import { mailService } from "../apps/mail/services/mail.service.js"

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>

        <button className="apps-icon material-icons" title="Apps">apps
            <nav className="main-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/mail">Mail</NavLink>
                <NavLink to="/note">Note</NavLink>
            </nav>
        </button>
        <button className="user-icon">{mailService.getUserName()[0]}</button>

        {/* <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav> */}
    </header>
}
