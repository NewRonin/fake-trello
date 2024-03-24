import styles from './Card.module.css'
import iconEdit from '../../assets/edit.svg'
import iconSave from '../../assets/save.svg'
import { Input } from '../input/CInput';
import { useState } from 'react';

type Props = {
    title : string;
    changeTitle : Function,
}

export function Card(props: Props) {
    const [showEditField, setShowEditField] = useState(false);

    return (
        <div className={styles.mainContainer}>
            {!showEditField &&
                <>
                    <img
                        className={styles.edit}
                        src={iconEdit}
                        onClick={() => setShowEditField(!showEditField)}
                    />
                    <div className={styles.title}>
                        {props.title}
                    </div>
                </>
            }
            {showEditField &&
                <>
                    <img
                        className={styles.edit}
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