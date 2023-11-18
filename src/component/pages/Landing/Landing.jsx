import { React } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useModal } from 'react-hooks-use-modal'
import { Header, ButtonWithArrow } from '../../index.js'
import './Landing.css'

const Landing = () => {

  // const navigate = useNavigate();
  const [Modal, open, close] = useModal('root', {
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
        <div className='content'>
          <p className='heading'>
            筋肉歴へようこそ。
          </p>
          <p className='introduction'>
            ここではあなたが行った<wbr/>トレーニングの記録を<wbr/>とることが<wbr/>できます。
            <br/>
            日々の成果を残して<wbr/>筋肉を成長させていきましょう。
          </p>
        </div>
        <div className='buttonArea'>
          <ButtonWithArrow
            className='signInButton'
            name={'はじめる'}
            onClick={open}
          />
        </div>
        <Modal>
          <div>
            <h1>Title</h1>
            <button onClick={close}>閉じる</button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Landing