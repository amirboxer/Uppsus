// services
import { utilService } from "../../../services/util.service.js"

// jsx components
import { OperationsBar } from "./OperationBar.jsx"

// react
const { Link } = ReactRouterDOM



export function MailPreview({ mail, deleteMail, toggleIsRead }) {
    return (
        <article className={`list-row ${mail.isRead ? '' : 'unread'}`}>

            {/* mail origin */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link">
                <div className="mail-preview from">
                    {mail.from}
                </div>
            </Link>

            {/* mail subject */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link">

                <div className="mail-preview-text-contents">
                    <div className="mail-preview subject"><p className="subject">{mail.subject}</p></div>
                    <div className="mail-preview body mail-font-regular"><p className="body">&nbsp;-&nbsp;{mail.body}</p></div>
                </div>
            </Link>

            {/* mail time stamp */}
            <Link to={`/mail/inbox/${mail.id}`} className="list-link-sentAt">
                <div className={`mail-preview sentAt`}>
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