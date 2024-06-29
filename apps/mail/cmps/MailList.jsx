import { MailPreview } from './MailPreview.jsx'
import { MailCategories } from './MailCategories.jsx'

const { Outlet, useNavigate, useLocation } = ReactRouterDOM
const { useState, useEffect } = React

export function MailList({ setMails, mails, deleteMail, toggleIsRead }) {
    // --- hooks --- //
    // states
    const [showList, setShowList] = useState(true)
    const location = useLocation()

    // navigation
    const navigate = useNavigate()

    useEffect(() => {
        if (location.state) {
            setMails(mails)
        }

        // Check if the current route is the detailed view
        setShowList(!location.pathname.includes('/mail/'));
    }, [location]);
    // --- hooks end --- //

    function linkMessege(mailId) {
        navigate(`/mail/${mailId}`, {state: {setMails: 'dfv'}})
    }

    return (
        <section className="mail-list">
            {showList && (
                <React.Fragment>
                    {/* categories */}
                    <MailCategories />

                    {/* mails */}
                    {mails.map(mail => (
                        <MailPreview
                            link={linkMessege}
                            mail={mail}
                            deleteMail={deleteMail}
                            toggleIsRead={toggleIsRead}
                            key={mail.id}
                        />
                    ))}
                </React.Fragment>
            )}
            <Outlet />
        </section>
    )
}