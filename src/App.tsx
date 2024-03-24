// import { useState } from 'react'
import { Column } from './components/column/CColumn'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  //  const [count, setCount] = useState(0)
  const [cards, setCards] = useState([{ column: 0, card: "123" }, { column: 1, card: "456" }])
  const [columns, setColumns] = useState(["TODO", "In progress", "Done"])

  function addColumn(name : string) : void{
    setColumns([... columns, name])
  }

  function addCard(name: string, index: number) : void{
    setCards([...cards, {column : index, card : name}])
  }

  function deleteColumn(index: number): void {
    setColumns( [...columns.filter((i, _index) => index != _index)])
    setCards([...cards.flatMap((i) => { 
      if (i.column > index){
        i.column--
      }
      else if (i.column === index){
        return []
      }
      return i
    })])
  }

  function deleteCard(card : object) : void{
    setCards([...cards.filter((i) => JSON.stringify(i) !== JSON.stringify(card))])
  }

  return (
    <div className={styles.layout}>
      {columns.map((i, index) =>
        <Column 
          key={i}
          title={i} 
          index={index}
          cards={
            cards.filter((j) => j.column === index)
          } 
          updateColumn={(value : string) => {columns[index] = value;}}
          deleteColumn={deleteColumn}
          addCard={addCard}
          deleteCard={deleteCard}
        />)
      }
      <div className={styles.addNew} onClick={() => addColumn('New column')}>
        +
      </div>
    </div>
  )
}

export default App
