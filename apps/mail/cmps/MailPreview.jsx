// services
import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"

// jsx components
import { OperationsBar } from "./OperationBar.jsx"

// react
const { Link } = ReactRouterDOM
const { useState } = React



export function MailPreview({ mail, deleteMail, toggleIsRead }) {

    const [starred, setStarred] = useState(mail.starred)
    const [selected, setSelected] = useState(false)

    function toggleStarred(mail) {
        setStarred(prevStarred => !prevStarred)
        mail.starred = !mail.starred
        mailService.save(mail)
            .catch(() => {
                mail.starred = !mail.starred
                setStarred(prevStarred => !prevStarred)
                //TODO Message
            })
    }

    function toggleSelected() {
        setSelected(prevSelected => !prevSelected)
    }

    return (
        <article className={`list-row ${mail.isRead ? '' : 'unread'} ${selected ? 'selected' : ''}`}>
            {/* starred */}                                                                      
            <button className="mail-preview mail-operation material-icons" onClick={toggleSelected}>{selected ? 'check' : 'check_box_outline_blank'}</button>
            
            {/* selected */}
            <button className={`mail-preview mail-operation material-icons ${starred ? 'starred' : ''}`} onClick={() => toggleStarred(mail)}>{starred ? 'star' : 'star_outline'}</button>

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