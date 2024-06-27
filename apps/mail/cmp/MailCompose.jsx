const { useEffect, useState } = React


export function MailCompose({sendMail}) {
    const [compose, setCompose] = useState(false)
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [createdAt, _] = useState(Date.now())

    function onCompose() {
        setCompose(true)
    }

    function onClose() {
        setCompose(false)
    }

    function onSendMessege() {
        sendMail({to, subject, body, createdAt})
        setCompose(false)
    }

    return (

        // < button > Compose</button >
        <React.Fragment>
            <button onClick={onCompose}>Compose</button>

            {compose && <section className="mail-compose">
                {/* head */}
                <div className="mail-compose-head">
                    <h2>New Message</h2>
                    <button className="material-icons-outlined" onClick={onClose}>clear</button>
                </div>

                {/* to */}
                <input className="mail-compose-to" type="text" placeholder="To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />

                {/* subject */}
                <input className="mail-compose-subject" type="text" placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                {/* body */}
                <textarea className="mail-compose-body" name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                {/* send button */}
                <div className="mail-compose-send">
                    <button className="send-btn" onClick={onSendMessege}>Send</button>
                </div>
            </section>
            }

        </React.Fragment>
    )
}

