import { useReducer } from 'react';
import { Card } from '../card/CCard'
import { Input } from '../input/CInput';
import styles from './Column.module.css'
import Cards from '../../types/cards'

import imageDelete from '../../assets/delete.svg'
import imageAdd from '../../assets/plus.svg'

type Props = {
    title : string,
    index : number,
    cards :  Cards,
    updateColumn : Function,
    deleteColumn : Function,
    addCard : Function,
    deleteCard : Function
}

export function Column(props : Props) {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <Input value={ props.title } updateValue={props.updateColumn} ></Input>
                <img src={imageAdd} onClick={() => props.addCard('New Card',props.index)} />
                <img src={imageDelete} onClick={() => props.deleteColumn(props.index)}/>
            </div>
            { props.cards.map( (i, index) => 
                <Card 
                    title={i.card} 
                    column={i.column}
                    changeTitle={(value : string) => {props.cards[index].card = value; forceUpdate()}} 
                    deleteCard={props.deleteCard}
                /> 
            )}
        </div>
    )
}