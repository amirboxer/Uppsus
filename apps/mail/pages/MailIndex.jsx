// +-+-+-+-+-+-+-+-+-+-+-+-  imports  +-+-+-+-+-+-+-+-+-+-+-+- // 
// services
import { mailService } from '../services/mail.service.js'
mailService.generateDemoMails()

// jsx components
import { MailList } from '../cmps/MailList.jsx'
import { MailNavigation } from '../cmps/MailFolderList.jsx'
import { MailSearch } from '../cmps/MailSearch.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'

// react
const { useEffect, useState } = React

export function MailIndex() {
    // --- hooks ---
    // states
    const [mails, setMails] = useState([])
    const [unreadCount, setUnreadCount] = useState(0)
    const [searchPattern, setSearchPattern] = useState(mailService.getFilterBy())

    // effects
    useEffect(() => {
        mailService.setFilterBy(searchPattern)  // in service not async
        mailService.getFolder('inbox')
            .then(setMails)
    }, [searchPattern])

    // count unraed
    useEffect(() => {
        setUnreadCount(countUnread())
    }, [mails])
    // --- hooks end ---

    function countUnread() {
        return mails.reduce((acc, mail) => {
            acc = mail.isRead ? acc + 1 : acc
            return acc
        }, 0)
    }

    // delete mail
    function deleteMail(mail) {
        console.log(mail.removedAt)
        if (!mail.removedAt) {
            const newMail = { ...mail, ['removedAt']: Date.now() }
            console.log(newMail)
            mailService.save(newMail)
                .then(() => setMails(prevMails => [...prevMails.filter(m => m.id !== mail.id), newMail]))
        }

        else {
            console.log(mail)
            mailService.remove(mail.id)
                .then(() => setMails(prevMails => prevMails.filter(m => m.id !== mail.id)))
                .catch(() => console.log('cannot remove'))
        }
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
    function sendMail({ to, subject, body, createdAt }) {
        const mail = mailService.createSentMail({ to, subject, body, createdAt })
        mailService.save(mail)
            .then(sentMail => setMails(prevMail => [sentMail, ...prevMail]))
    }

    return (
        <section className="mail-index">
            {/* search bar */}
            <MailSearch
                prevPattern={searchPattern}
                setPrevPattern={setSearchPattern} />
                <span className="material-icons">menu</span>

            {/* side bar */}
            <div className='side-bar'>
                {/* hamburger */}

                {/* new email */}
                <MailCompose sendMail={sendMail} />

                {/* sidebars folders */}
                <MailNavigation
                    setMails={setMails}
                    unreadCount={unreadCount} />
            </div>
            {/* preview list */}

            <div className="previews-conrainer">
                <MailList
                    setMails={setMails}
                    mails={mails}
                    deleteMail={deleteMail}
                    toggleIsRead={toggleIsRead} />
            </div>
        </section>
    )
}