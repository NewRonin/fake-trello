import { Card } from '../card/CCard'
import styles from './Column.module.css'

type Props = {
    title : string,
    cards : string[]
}

export function Column(props : Props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                { props.title }
            </div>
            { props.cards.map( (i) => <Card title={i} /> )}
        </div>
    )
}