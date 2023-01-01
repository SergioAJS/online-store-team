export const show = document.querySelector('.confirm-btn'),
  backstage = document.querySelector('.black'),
  closeBtn = document.querySelector('.cls-btn'),
  modal = document.querySelector('.modal')

export function closePopUp() {
  backstage?.classList.remove('black_active')
  modal?.classList.remove('modal__open')
}

show?.addEventListener('click', function () {
  modal?.classList.toggle('modal__open')
  backstage?.classList.toggle('black_active')
})

closeBtn?.addEventListener('click', closePopUp)
backstage?.addEventListener('click', closePopUp)
