export function OperationsBar({ deleteMail, toggleIsRead, mail }) {

    function onClickDeleteMail(ev) {
        ev.stopPropagation()
        deleteMail(mail.id)
    }

    function onClickToggleUnread(ev) {
        ev.stopPropagation()
        toggleIsRead(mail)
    }

    return (
        <ul className="operations-bar clean-ul hidden">
            <li className="mail-preview" onClick={onClickDeleteMail}>Delete</li>
            <li className="mail-preview" onClick={onClickToggleUnread}>Mark as {mail.isRead ? 'un' : ''}read</li>
        </ul>
    )
}

