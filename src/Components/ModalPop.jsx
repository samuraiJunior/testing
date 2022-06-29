import React from 'react'
import s from "./Components.module.scss"
const ModalPop = ({ setModal }) => {
  return (
    <div className={s.modal}>
      <div className={s.modalCard}>
        <img className={s.btnCross} onClick={() => setModal(false)} src="btnCross.svg" alt="cross" />
        <div className={s.modalCard_Title}>Успех!</div>
        <div className={s.modalCard_Content}>
          <img src="OrderSucces.png" alt="succses" />
          <p>Вы успешно зарегистрировались на сайте.</p>
        </div>
      </div>
    </div>
  )
}

export default ModalPop
