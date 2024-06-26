// +-+-+-+-+-+-+-+-+-+-+-+-  imports  +-+-+-+-+-+-+-+-+-+-+-+- // 
// services
import { mailService } from '../services/mail.service.js'
mailService.generateDemoMails()
// jsx components
import { MailTable } from '../cmps/MailTable.jsx'
import { MailFolderList } from '../cmps/MailFolderList.jsx'

// react
const { useEffect, useState } = React

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [unreadCount, setUnreadCount] = useState(0)

    // get mails
    useEffect(() => {
        mailService.query()
            .then(setMails)
    }, [])

    // count unraed
    useEffect(() => {
        setUnreadCount(countUnread())
    }, [mails])

    function countUnread() {
        return mails.reduce((acc, mail) => {
            acc = mail.isRead ? acc + 1 : acc
            return acc
        }, 0)
    }

    // delete mail
    function deleteMail(mailId) {
        mailService.remove(mailId)
            .then(setMails(prevMails => [...prevMails.filter(mail => mail.id !== mailId)]))

        // TODO show massages
    }

    // delete mail
    function toggleIsRead(mail) {
        mail.isRead = !mail.isRead
        mailService.save(mail)
            .then(() => {
                setUnreadCount(prevUnreadCount => mail.isRead ? prevUnreadCount - 1 : prevUnreadCount + 1
                )
            })
            .catch(() => {
                mail.isRead = !mail.isRead
            })
        // TODO show massages
    }


    return (
        <section className="mail-index">
            <MailFolderList
                unreadCount={unreadCount} />

            <MailTable
                mails={mails}
                deleteMail={deleteMail}
                toggleIsRead={toggleIsRead} />
        </section>
    )
}

