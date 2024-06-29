const {useState } = React

export function MailCategories() {
    const [selected, setSelected] = useState('primery')

    return (
        <ul className="mail-categories clean-ul">
            {/* Primary */}
            <button className={`mail-categorie ${selected === 'primery' ? 'selected' : ''}`}
            onClick={() => setSelected('primery')}>
                <div className="material-icons icon primery">inbox</div>
                <span>Primary</span>
            </button>

            {/* promotion */}
            <button className={`mail-categorie ${selected === 'promotions' ? 'selected' : ''}`}
            onClick={() => setSelected('promotions')}>

                <div className="material-icons icon promotions">loyalty</div>
                <span>Promotions</span>
            </button>

            {/* Social  */}
            <button className={`mail-categorie ${selected === 'social' ? 'selected' : ''}`}
            onClick={() => setSelected('social')}>
                <div className="material-icons icon social">group</div>
                <span>Social</span>
            </button>
        </ul>
    )
}