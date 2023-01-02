const validations: boolean[] = [false, false, true, true, true, true, false]

function checkValidity(): void {
  const confirm = document.querySelector('.submit-btn') as HTMLButtonElement
  if (validations.every((x) => x)) {
    confirm.disabled = false
  } else {
    confirm.disabled = true
  }
}

export function checkCVV(): void {
  const userCvv = document.getElementById('cvv') as HTMLInputElement
  const cvvError: HTMLTemplateElement | null = document.querySelector(
    '.form__label_cvv > span.error'
  )
  if (userCvv.validity.valid) {
    validations[6] = true
    if (cvvError) {
      cvvError.textContent = ''
      cvvError.className = 'error'
    }
  } else {
    validations[6] = false
    if (cvvError) {
      if (userCvv.validity.valueMissing) {
        cvvError.textContent = 'You need to enter a CVV.'
      } else if (userCvv.validity.tooShort) {
        cvvError.textContent = `CVV should be at least ${userCvv.minLength} numbers, you entered ${userCvv.value.length}.`
      } else if (userCvv.validity.patternMismatch) {
        cvvError.textContent =
          'Entered value needs to be numbers without spaces.'
      }
      if (cvvError) cvvError.className = 'error active'
    }
  }
  checkValidity()
}

export function checkName(): void {
  const userName = document.getElementById('name') as HTMLInputElement
  const nameError: HTMLTemplateElement | null = document.querySelector(
    '.form__label_name > span.error'
  )
  if (userName.validity.valid) {
    validations[0] = true
    if (nameError) {
      nameError.textContent = ''
      nameError.className = 'error'
    }
  } else {
    validations[0] = false
    if (nameError) {
      if (userName.validity.valueMissing) {
        nameError.textContent = 'You need to enter name and surname.'
      } else if (userName.validity.patternMismatch) {
        nameError.textContent =
          'Entered value needs to be at least 2 words of 3 and more letters.'
      }
      nameError.className = 'error active'
    }
  }
  checkValidity()
}

export function checkAddress(): void {
  const userAddress = document.getElementById('address') as HTMLInputElement
  const addressError: HTMLTemplateElement | null = document.querySelector(
    '.form__label_address > span.error'
  )
  if (userAddress.validity.valid) {
    validations[1] = true
    if (addressError) {
      addressError.textContent = ''
      addressError.className = 'error'
    }
  } else {
    validations[1] = false
    if (addressError) {
      if (userAddress.validity.valueMissing) {
        addressError.textContent = 'You need to enter your address.'
      } else if (userAddress.validity.patternMismatch) {
        addressError.textContent =
          'Entered value needs to be at least 3 words of 5 and more letters.'
      }
      addressError.className = 'error active'
    }
  }
  checkValidity()
  console.log(validations, 'validations')
}
