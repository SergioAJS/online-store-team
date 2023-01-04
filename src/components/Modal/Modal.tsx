import React from 'react'
import { SendForms } from '../SendForms'
import AppContext from '../../context'
import { useNavigate } from 'react-router-dom'

export function Modal() {
  const { modal, setModal } = React.useContext(AppContext)
  const navigate = useNavigate()

  const onCloseModal = (): void => {
    setModal?.(false)
  }
  return (
    <div
      className="modal"
      style={modal ? { display: 'block' } : { display: 'none' }}
    >
      <div className="modal__content">
        <h3 className="card__title">Order</h3>
        <SendForms />
        <button
          className="btn card__button btn-gray cls-btn"
          onClick={() => {
            onCloseModal()
            if (modal) navigate('/cart', { state: { modalOuter: false } })
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}
