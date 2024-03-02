import React, {useState} from 'react'
import { AccordionPanel, Button } from '../index.js'
import styles from './List.module.css'

const List = () => {
  const [element, setElement] = useState([]);

  const addElement = () => {
    setElement(prev => [...prev, '']);
  }

  const removeElement = (removeIndex) => {
    setElement(prev => prev.filter((_, index) => index !== removeIndex));
  }

  return (
    <div className={styles.listArea}>
      {element.map((_, index) => (
        <div className={styles.listElementWrapper} key={'ListIndex' + index}>
          <AccordionPanel index={index}/>
          <Button className={styles.deleteButton} onClick={() => removeElement(index)} text={'削除'}/>
        </div>
      ))}
      <Button onClick={addElement} text={'記録する'}/>
    </div>
  )
}

export default List