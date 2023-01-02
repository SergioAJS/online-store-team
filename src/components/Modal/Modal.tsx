import React from 'react'
import { SendForms } from '../SendForms'

export function Modal() {
  const onCloseModal = (): void => {
    const backstage: HTMLDivElement | null = document.querySelector('.black'),
      modal: HTMLDivElement | null = document.querySelector('.modal')
    backstage?.classList.remove('black_active')
    modal?.classList.remove('modal__open')
  }
  return (
    <div className="modal">
      <div className="modal__content">
        <h3 className="card__title">Order</h3>
        <SendForms />
        <button
          className="btn card__button btn-gray cls-btn"
          onClick={() => onCloseModal()}
        >
          Close
        </button>
      </div>
    </div>
  )
}
