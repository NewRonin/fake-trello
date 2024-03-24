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

    function onDragStart(evt : DragEvent) {
        const itemId = props.column

        if (itemId > -1) {
            evt.dataTransfer!.setData('id', itemId.toString())
            evt.dataTransfer!.effectAllowed = 'move'
            evt.dataTransfer!.dropEffect = 'move'
        }

    }

    return (
        <div className={styles.mainContainer} draggable={true} onDragStart={(evt) => onDragStart(evt)}>
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