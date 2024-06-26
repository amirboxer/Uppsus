// services
import { utilService } from "../../../services/util.service.js"

// jsx components
import { OperationsBar } from "./OperationBar.jsx"

// react
const { Link } = ReactRouterDOM



export function MailPreview({ mail, deleteMail, toggleIsRead }) {
    return (
        <ul className="clean-ul list-row">

            {/* mail origin */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link">
                <li className={`mail-preview from ${mail.isRead ? '' : 'unread'}`}>
                    {mail.from}
                </li>
            </Link>

            {/* mail subject */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link">

                <li className="mail-preview-text-contents">
                    <p className={`mail-preview subject ${mail.isRead ? '' : 'unread'}`}> {mail.subject}</p> 
                    <p className="mail-preview body"> - {mail.body}</p>
                </li>
            </Link>


            {/* mail main text */}
            {/* <Link to={`/mail/inbox/${mail.id}`} className="list-link">

                <li className={`mail-preview body`}>
                    {mail.body}
                </li>
            </Link> */}

            {/* mail time stamp */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link-sentAt">
                <li className={`mail-preview sentAt`}>
                    {utilService.getTimeDisplay(mail.sentAt)}
                </li>
            </Link>

            {/* mail operations */}
            <li>
                <OperationsBar
                    deleteMail={deleteMail}
                    toggleIsRead={toggleIsRead}
                    mail={mail} />
            </li>
        </ul>
    )
}