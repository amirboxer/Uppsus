import { MailPreview } from './MailPreview.jsx'
import { MailCategories } from './MailCategories.jsx'

export function MailTable({ mails, deleteMail, toggleIsRead }) {

    //     <thead>
    //     <tr>
    //       <th scope="col">Items</th>
    //       <th scope="col">Expenditure</th>
    //     </tr>
    //   </thead>
    return (
        <table className="mail-data mail-table">
            {/* caption */}
            <caption style={{ captionSide: 'bottom', padding: '10px' }}>
                Last used:
                memeory used:
            </caption>

            {/* categories */}
            <MailCategories />

            {/* mails */}
            <tbody>
                {mails.map(mail =>
                    <MailPreview
                        mail={mail}
                        deleteMail={deleteMail}
                        toggleIsRead={toggleIsRead}
                        key={mail.id} />)}
            </tbody>

        </table >
    )
}



