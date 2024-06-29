import { mailService } from "../services/mail.service.js"

export function MailNavigation({ unreadCount, setMails }) {

    function onFolderClick(folderName) {
        mailService.getFolder(folderName)
            .then(setMails)

    }

    return (
        <ul className="mail-navigation-list clean-ul">
            <li>
                <button onClick={() => onFolderClick('inbox')} className="selected hambuger-closed">
                    <div className="material-icons icon">inbox</div>
                    <div className="folder inbox hambuger-closed ">Inbox
                        <span className="unread-count">{unreadCount}</span>
                    </div>

                </button>
            </li>

            <li>
                <button onClick={() => onFolderClick('starred')} className="hambuger-closed">
                    <span className="material-icons icon">star_outline</span>
                    <div className="folder star hambuger-closed">Starred</div>
                </button>
            </li>

            <li>
                <button onClick={() => onFolderClick('sent')} className="hambuger-closed">
                    <span className="material-icons icon">send</span>
                    <div className="folder sent hambuger-closed">Sent</div>
                </button>
            </li>

            <li>
                <button className="hambuger-closed">
                    <span className="material-icons icon">note</span>
                    <div className="folder drafts hambuger-closed">Drafts</div>
                </button>

            </li>

            <li>
                <button onClick={() => onFolderClick('bin')} className="selected hambuger-closed">
                    <span className="material-symbols-outlined icon">delete</span>
                    <div className="folder trash hambuger-closed">Bin</div>
                </button>
            </li>
        </ul>
    )
}