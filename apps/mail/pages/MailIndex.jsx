// +-+-+-+-+-+-+-+-+-+-+-+-  imports  +-+-+-+-+-+-+-+-+-+-+-+- // 
// services
import { mailService } from '../services/mail.service.js'
mailService.generateDemoMails()
// jsx components
import { MailList } from '../cmps/MailList.jsx'
import { MailNavigation } from '../cmps/MailFolderList.jsx'
import { MailSearch } from '../cmps/MailSearch.jsx'
import {MailCompose} from '../cmp/MailCompose.jsx'

// react
const { useEffect, useState } = React

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [unreadCount, setUnreadCount] = useState(0)
    const [searchPattern, setSearchPattern] = useState({ subject: '' })

    // get mails
    useEffect(() => {
        //console.log(searchPattern)
        mailService.setFilterBy(searchPattern)  // in service not async
        mailService.query()
            .then(setMails)
    }, [searchPattern])

    // count unraed
    useEffect(() => {
        //console.log(mails.length) //TODO delete
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
            {/* search bar */}
            <MailSearch
                prevPattern={searchPattern}
                setPrevPattern={setSearchPattern} />

            {/* side bar */}
            <div className='side-bar'>
                

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
            <MailCompose />
        </section>
    )
}