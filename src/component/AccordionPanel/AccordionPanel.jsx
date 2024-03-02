import React from 'react'
import { Button, InputForm } from '../index.js'
import styles from './AccordionPanel.module.css'

const AccordionPanel = (props) => {
  const {index, removeElement} = props;

  return (
    <>
      <div className={styles.contentArea}>
        {'要素' + index}
      </div>
    </>
  )
}

export default AccordionPanel