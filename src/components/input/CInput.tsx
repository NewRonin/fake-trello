import { useState } from "react"

type Props = {
    value : string;
    updateValue : Function,
}

export function Input(props : Props){
    const [value, setValue] = useState(props.value)

    return (
        <input value={value} onChange={(evt) => {setValue(evt.target.value); props.updateValue(evt.target.value)}}></input>   
    )
}