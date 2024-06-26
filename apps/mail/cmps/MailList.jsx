import { MailPreview } from './MailPreview.jsx'
import { MailCategories } from './MailCategories.jsx'

export function MailList({ mails, deleteMail, toggleIsRead }) {
    return (
        <section className="mail-list">
            {/* categories */}
            <MailCategories />

            {/* mails */}
            {mails.map(mail =>
                <MailPreview
                    mail={mail}
                    deleteMail={deleteMail}
                    toggleIsRead={toggleIsRead}
                    key={mail.id} />)}

        </section >
    )
}



