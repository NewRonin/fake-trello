import { useState } from "react"
import styles from './CInput.module.css'

type Props = {
    value : string;
    autoFocus?: boolean,
    updateValue : Function,
}

export function Input(props : Props){
    const [value, setValue] = useState(props.value)

    return (
        <input className={styles.inputField}
            autoFocus={props.autoFocus}
            value={value} 
            onChange={(evt) => {setValue(evt.target.value); props.updateValue(evt.target.value)}}>
        </input>   
    )
}