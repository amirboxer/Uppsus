export function OperationsBar({ deleteMail, toggleIsRead, mail }) {

    function preventPropagate(callbac) {
        return event =>  {
            
        }
    }
    return (
        <td className="operations-bar">
            <div className="mail-preview icon" onClick={() => deleteMail(mail.id)}>Delete</div>
            <div className="mail-preview icon" onClick={() => toggleIsRead(mail)}>Mark as {mail.isRead ? 'un' : ''}read</div>
        </td>
    )
}

