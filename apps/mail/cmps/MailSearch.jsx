const { useEffect, useState, useRef } = React


export function MailSearch({ prevPattern, setPrevPattern }) {
    //const [searchPattern, setSearchPattern] = useState('')
    //const firstUpdate = useRef(true);


    //console.log(prevPattern)
    function onChangePattern({target}) {
        setPrevPattern(prevP => {
            //console.log({...prevP, ['subject'] : target.value})
             return {...prevP, ['subject'] : target.value}
        })
    }

    return (
        <div>
            <input type="text" value={prevPattern.subject} placeholder="Search mail" onChange={onChangePattern} />
        </div>
    )
}