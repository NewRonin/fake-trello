import styles from './Card.module.css'

type Props = {
    title : string;
}

export function Card(props : Props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                { props.title }
            </div>
        </div>
    )
}