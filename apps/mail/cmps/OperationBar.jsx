export function OperationsBar({ deleteMail, toggleIsRead, mail }) {
    return (
        <td className="operations-bar">
            <div className="mail-data" onClick={() => deleteMail(mail.id)}>Delete</div>
            <div className="mail-data" onClick={() => toggleIsRead(mail)}>Mark as {mail.isRead ? 'un' : ''}read</div>
        </td>
    )
}

