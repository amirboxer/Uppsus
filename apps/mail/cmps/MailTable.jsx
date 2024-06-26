import { MailPreview } from './MailPreview.jsx'
import { MailCategories} from './MailCategories.jsx'

export function MailTable({ mails }) {

    //     <thead>
    //     <tr>
    //       <th scope="col">Items</th>
    //       <th scope="col">Expenditure</th>
    //     </tr>
    //   </thead>
    return (
        <table className="mail-data mail-table">
            <caption style={{ captionSide: 'bottom', padding: '10px' }}>
                Last used:
                memeory used:
            </caption>
            <MailCategories/>
            <tbody>
                {mails.map(mail => <MailPreview mail={mail} key={mail.id} />)}
            </tbody>

        </table >
    )
}



