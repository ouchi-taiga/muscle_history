import { React } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useModal } from 'react-hooks-use-modal'
import { Header, SignInButton, SignInModal } from '../../index.js'
import './Landing.css'

const Landing = () => {

  // const navigate = useNavigate();
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    focusTrapKOption: {
      clickOutsideDeactives: false
    },
  })

  return (
    <>
      <div className='container'>
        <div className='header'>
          <Header />
        </div>
        {!isOpen && <div className='content'>
          <p className='heading'>
            筋肉歴へようこそ。
          </p>
          <p className='introduction'>
            ここではあなたが行った<wbr/>トレーニングの記録を<wbr/>とることが<wbr/>できます。
            <br/>
            日々の成果を残して<wbr/>筋肉を成長させていきましょう。
          </p>
        </div>}
        {!isOpen && <div className='buttonArea'>
          <SignInButton
            className='signInButton'
            name={'はじめる'}
            onClick={open}
          />
        </div>}
        <Modal className='signInModal'>
          <SignInModal
            className={!isOpen ? 'signInModalContent' : 'blurSignInModalContent'}
            onClick={close}
          />
        </Modal>
      </div>
    </>
  )
}

export default Landing