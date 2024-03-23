import { useReducer } from 'react';
import { Card } from '../card/CCard'
import styles from './Column.module.css'

type Props = {
    title : string,
    cards : string[]
}

export function Column(props : Props) {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                { props.title }
            </div>
            { props.cards.map( (i, index) => 
                <Card title={i} changeTitle={(value : string) => {props.cards[index] = value; forceUpdate()}} /> 
            )}
        </div>
    )
}