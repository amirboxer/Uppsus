export function MailCompose() {


    return (
        <section className="mail-compose">
            {/* head */}
            <div className="mail-compose-head">
                <h2>New Messege</h2>
                <button className="material-icons-outlined">clear</button>
            </div>

            {/* to */}
            <input className="mail-compose-to" type="text" placeholder="To" />

            {/* subject */}
            <input className="mail-compose-subject" type="text" placeholder="Subject" />

            {/* body */}
            <textarea className="mail-compose-body" name="body"></textarea>

            {/* send  */}
            <div className="mail-compose-send">
                <button className="send-btn">Send</button>
            </div>
        </section >
    )
}

