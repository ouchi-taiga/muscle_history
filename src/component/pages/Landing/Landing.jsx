import { React } from 'react'
import { useModal } from 'react-hooks-use-modal'
import { Header, Button, SignInModal, RightArrowIcon } from '../../index.js'
import styles from './Landing.module.css'

/**
 * スタイル
 */
const startButtonStyle = {
  width: '100%',
  height: '100%',
  color: '#F2F2F2',
  background: 'rgba(230, 126, 34, 0.65)',
  border: 'none',
  borderRadius: '32px',
  cursor: 'pointer',
  fontSize: '2.3rem'
}
const startButtonIconStyle = {
  width: '2.3rem',
  height: '2.3rem'
}

const Landing = () => {

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
        <Button
          name={'はじめる'}
          icon={<RightArrowIcon />}
          onClick={open}
          buttonStyle={startButtonStyle}
          iconStyle={startButtonIconStyle}
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