// +-+-+-+-+-+-+-+-+-+-+-+-  imports  +-+-+-+-+-+-+-+-+-+-+-+- // 
// services
import { mailService } from '../services/mail.service.js'
mailService.generateDemoMails()
// jsx components
import { MailList } from '../cmps/MailList.jsx'
import { MailNavigation } from '../cmps/MailFolderList.jsx'
import { MailSearch } from '../cmps/MailSearch.jsx'
import { MailCompose } from '../cmp/MailCompose.jsx'

// react
const { useEffect, useState } = React

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [unreadCount, setUnreadCount] = useState(0)
    const [searchPattern, setSearchPattern] = useState({ subject: '' })

    // get mails
    useEffect(() => {
        mailService.setFilterBy(searchPattern)  // in service not async
        mailService.query()
            .then(setMails)
    }, [searchPattern])

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

    //TODO remove instaed of delete
    function deleteMail(mailId) {
        mailService.remove(mailId)
            .then(setMails(prevMails => [...prevMails.filter(mail => mail.id !== mailId)]))
            .catch(() => console.log('cannot remove'))
    }

    // read/unread mail
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
    }

    // add mail
    function sendMail({to, subject, body, createdAt}) {
        const mail = mailService.createSentMail({to, subject, body, createdAt})
        mailService.save(mail)
        .then(sentMail => setMails(prevMail => [sentMail,...prevMail]))
    }

    return (
        <section className="mail-index">
            {/* search bar */}
            <MailSearch
                prevPattern={searchPattern}
                setPrevPattern={setSearchPattern} />

            {/* side bar */}
            <div className='side-bar'>
                {/* new email */}
                <MailCompose sendMail={sendMail}/>

                {/* sidebars folders */}
                <MailNavigation
                    unreadCount={unreadCount} />
            </div>
            {/* preview list */}
            <div className="previews-conrainer">
                <MailList
                    mails={mails}
                    deleteMail={deleteMail}
                    toggleIsRead={toggleIsRead} />
            </div>
        </section>
    )
}