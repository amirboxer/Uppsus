// services
import { utilService } from "../../../services/util.service.js"

// jsx components
import { OperationsBar } from "./OperationBar.jsx"


export function MailPreview({ mail, deleteMail, toggleIsRead }) {
    return (
        <tr className="mail-data table-row">
            <td className={`mail-data from ${mail.isRead ? 'isRead' : ''}`}>{mail.from}</td>
            <td className={`mail-data subject ${mail.isRead ? 'isRead' : ''}`}>{mail.subject}</td>
            <td className={`mail-data body`}>{mail.body}</td>
            <td className={`mail-data sentAt`}>{utilService.getTimeDisplay(mail.sentAt)}</td>
            <OperationsBar
                deleteMail={deleteMail}
                toggleIsRead={toggleIsRead}
                mail={mail} />
        </tr>
    )
}