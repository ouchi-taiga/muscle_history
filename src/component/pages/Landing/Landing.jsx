import { React } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useModal } from 'react-hooks-use-modal'
import { Header, SignInButton, SignInModal } from '../../index.js'
import styles from './Landing.module.css'

const Landing = () => {

  // const navigate = useNavigate();
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    focusTrapKOption: {
      clickOutsideDeactives: false
    },
  })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      {!isOpen && <div className={styles.content}>
        <p className={styles.heading}>
          筋肉歴へようこそ。
        </p>
        <p className={styles.introduction}>
          ここではあなたが行った<wbr/>トレーニングの記録を<wbr/>とることが<wbr/>できます。
          <br/>
          日々の成果を残して<wbr/>筋肉を成長させていきましょう。
        </p>
      </div>}
      {!isOpen && <div className={styles.buttonArea}>
        <SignInButton
          name={'はじめる'}
          onClick={open}
        />
      </div>}
      <Modal>
        <SignInModal
          className={!isOpen ? 'signInModalContent' : 'blurSignInModalContent'}
          onClick={close}
        />
      </Modal>
    </div>
  )
}

export default Landing