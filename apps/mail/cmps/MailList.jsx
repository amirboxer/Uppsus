import { MailPreview } from './MailPreview.jsx'
import { MailCategories } from './MailCategories.jsx'
import {selectorsBar} from './selectorsBar.jsx'

export function MailList({ mails, deleteMail, toggleIsRead }) {
    return (
        <section className="mail-list">
            {/* selectors */}

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



