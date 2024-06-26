const { useParams } = ReactRouterDOM



export function MailDetails() {
    const params = useParams();

    //navigate("/mail/inbox", { state: { mailId: mail.id } });


    console.log(params)
}
