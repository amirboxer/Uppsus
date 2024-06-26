//import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {
    return (
        <tr className="mail-data table-row">
            <td className={`mail-data from ${mail.isRead ? 'isRead' : ''}`}>{mail.from}</td>
            <td className={`mail-data subject ${mail.isRead ? 'isRead' : ''}`}>{mail.subject}</td>
            <td className={`mail-data body`}>{mail.body}</td>
            <td className={`mail-data sentAt`}>{mail.sentAt}</td>
        </tr>
    )
}