import styles from './Card.module.css'
import iconEdit from '../../assets/edit.svg'
import iconSave from '../../assets/save.svg'
import iconDelete from '../../assets/delete-circle.svg'
import { Input } from '../input/CInput';
import { useState } from 'react';

type Props = {
    title : string,
    column: number,
    changeTitle : Function,
    deleteCard : Function
}

export function Card(props: Props) {
    const [showEditField, setShowEditField] = useState(false);

    return (
        <div className={styles.mainContainer}>
            {!showEditField &&
                <>
                    <img
                        className={styles.leftIcon}
                        src={iconEdit}
                        onClick={() => setShowEditField(!showEditField)}
                    />
                    <img
                        className={styles.rightIcon}
                        src={iconDelete}
                        onClick={() => props.deleteCard({column: props.column, card: props.title})}
                    />
                    <div className={styles.title}>
                        {props.title}
                    </div>
                </>
            }
            {showEditField &&
                <>
                    <img
                        className={styles.rightIcon}
                        src={iconSave}
                        onClick={() => {
                            setShowEditField(!showEditField)
                        }}
                    />
                    <Input 
                        autoFocus={true}
                        value={props.title} 
                        updateValue={props.changeTitle}
                    />
                </>
            }
        </div>
    )
}