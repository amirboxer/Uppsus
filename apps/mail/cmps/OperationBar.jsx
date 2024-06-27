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
        <div className="operations-bar hidden">
            <div className="mail-preview mail-operation read-unread" onClick={onClickToggleUnread}>
                {mail.isRead ?
                    <span class="material-symbols-outlined ">drafts</span> :
                    <span class="material-symbols-outlined">mark_email_unread</span>}
            </div>
            
            <div className="mail-preview mail-operation delete" onClick={onClickDeleteMail}>
                <span class="material-symbols-outlined">delete</span>
            </div>
        </div>
    )
}

