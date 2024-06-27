// services
import { utilService } from "../../../services/util.service.js"

// jsx components
import { OperationsBar } from "./OperationBar.jsx"

// react
const { Link } = ReactRouterDOM



export function MailPreview({ mail, deleteMail, toggleIsRead }) {
    return (
        <article className="clean-ul list-row">

            {/* mail origin */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link">
                <div className={`mail-preview from ${mail.isRead ? '' : 'unread'}`}>
                    {mail.from}
                </div>
            </Link>

            {/* mail subject */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link">

                <div className="mail-preview-text-contents">
                    <p className={`mail-preview subject ${mail.isRead ? '' : 'unread'}`}> {mail.subject}</p> 
                    <p className="mail-preview body"> - {mail.body}</p>
                </div>
            </Link>

            {/* mail time stamp */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link-sentAt">
                <div className={`mail-preview sentAt ${mail.isRead ? '' : 'unread'}`}>
                    {utilService.getTimeDisplay(mail.sentAt)}
                </div>
            </Link>

            {/* mail operations */}
            <div>
                <OperationsBar
                    deleteMail={deleteMail}
                    toggleIsRead={toggleIsRead}
                    mail={mail} />
            </div>
        </article>
    )
}