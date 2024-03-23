// import { useState } from 'react'
import { Column } from './components/column/CColumn'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
//  const [count, setCount] = useState(0)
    const [cards] = useState(["123", "456"])
    const [columns] = useState(["TODO", "In progress", "Done"])

  return (
    <div className={styles.layout}>
      { columns.map( (i) => <Column title={i} cards={cards}/> ) }
    </div>
  )
}

export default App
