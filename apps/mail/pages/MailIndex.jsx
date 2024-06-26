// +-+-+-+-+-+-+-+-+-+-+-+-  imports  +-+-+-+-+-+-+-+-+-+-+-+- // 
// services
import { mailService } from '../services/mail.service.js'

// jsx components
import { MailTable } from '../cmps/MailTable.jsx'
import { MailFolderList } from '../cmps/MailFolderList.jsx'
import {OperationBar} from '../cmps/OperationBar.jsx'

// react
const { useEffect, useState } = React

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [unreadCount, setUnreadCount] = useState(0)

    useEffect(() => {
        mailService.query()
            .then(setMails)
    }, [])

    useEffect(() => {
        setUnreadCount(countUnread())
    }, [mails])

    function countUnread() {
        return mails.reduce((acc, mail) => {
            acc = mail.isRead ? acc + 1 : acc
            return acc
        }, 0)
    }

    return (
        <section className="mail-index">
            <OperationBar/>
            <MailFolderList unreadCount={unreadCount} />
            <MailTable mails={mails} />
        </section>
    )
}

