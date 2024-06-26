// services
import { utilService } from "../../../services/util.service.js"

// jsx components
import { OperationsBar } from "./OperationBar.jsx"


export function MailPreview({ mail, deleteMail, toggleIsRead }) {
    return (
        // <button><Link to={`/bookIndex/BookDetails/${book.id}`}>More Details</Link></button>

        <tr className="mail-data table-row" onClick={() => console.log('rowclick')}>
            <td className={`mail-preview from ${mail.isRead ? '' : 'unread'}`}>{mail.from}</td>
            <td className={`mail-preview subject ${mail.isRead ? '' : 'unread'}`}>{mail.subject}</td>
            <td className={`mail-preview body`}>{mail.body}</td>
            <td className={`mail-preview sentAt`}>{utilService.getTimeDisplay(mail.sentAt)}</td>
            <OperationsBar
                deleteMail={deleteMail}
                toggleIsRead={toggleIsRead}
                mail={mail} />
        </tr>
    )
}