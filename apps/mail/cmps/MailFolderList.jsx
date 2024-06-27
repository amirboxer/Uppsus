export function MailNavigation({ unreadCount }) {
    return (
        <ul className="mail-navigation-list">
            <li><div className="folder inbox">Inbox</div><span className="unread-count">{unreadCount}</span></li>
            <li><div className="folder stared">Starred</div></li>
            <li><div className="folder sent">Sent</div></li>
            <li><div className="folder drafts">Drafts</div></li>
            <li><div className="folder trash">Trash</div></li>
        </ul>
    )
}