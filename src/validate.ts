
export function checkCVV(validations : boolean[]): void {
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
}

export function checkName(validations: boolean[]): void {
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
}

export function checkAddress(validations: boolean[]): void {
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
}

export function checkPhone(validations: boolean[]): void {
  const userPhone = document.getElementById('phone') as HTMLInputElement
  const phoneError: HTMLTemplateElement | null = document.querySelector(
    '.form__label_phone > span.error'
  )
  if (userPhone.validity.valid) {
    validations[2] = true
    if (phoneError) {
      phoneError.textContent = ''
      phoneError.className = 'error'
    }
  } else {
    validations[2] = false
    if (phoneError) {
      if (userPhone.validity.valueMissing) {
        phoneError.textContent = 'You need to enter your Phonenumber.'
      } else if (userPhone.validity.patternMismatch) {
        phoneError.textContent =
          'Entered value needs to start from + and to be at least 8 numbers long.'
      }
      phoneError.className = 'error active'
    }
  }
}

export function checkEmail(validations: boolean[]): void {
  const userEmail = document.getElementById('email') as HTMLInputElement
  const emailError: HTMLTemplateElement | null = document.querySelector(
    '.form__label_email > span.error'
  )
  if (userEmail.validity.valid) {
    validations[3] = true
    if (emailError) {
      emailError.textContent = ''
      emailError.className = 'error'
    }
  } else {
    validations[3] = false
    if (emailError) {
      if (userEmail.validity.valueMissing) {
        emailError.textContent = 'You need to enter your EMail.'
      } else if (userEmail.validity.patternMismatch) {
        emailError.textContent = 'Entered value needs to match email'
      }
      emailError.className = 'error active'
    }
  }
}

export function checkCardNumber(validations: boolean[]): void {
  const userCardNumber = document.getElementById(
    'cardNumber'
  ) as HTMLInputElement
  const cardlError: HTMLTemplateElement | null = document.querySelector(
    '.form__label_cardNumber > span.error'
  )

  if (userCardNumber.validity.valid) {
    validations[4] = true
    if (cardlError) {
      cardlError.textContent = ''
      cardlError.className = 'error'
    }
  } else {
    validations[4] = false
    if (cardlError) {
      if (userCardNumber.validity.valueMissing) {
        cardlError.textContent = 'You need to enter your CardNumber.'
      } else if (userCardNumber.validity.patternMismatch) {
        cardlError.textContent = 'Enter 16 numbers starting with 3, 4 or 5'
      }
      cardlError.className = 'error active'
    }
  }
}

export function checkExpiration(validations: boolean[]): void {
  const userExpiration = document.getElementById('date') as HTMLInputElement
  const cardlError: HTMLTemplateElement | null = document.querySelector(
    '.form__label_date > span.error'
  )

  if (userExpiration.validity.valid) {
    validations[5] = true
    if (cardlError) {
      cardlError.textContent = ''
      cardlError.className = 'error'
    }
  } else {
    validations[5] = false
    if (cardlError) {
      if (userExpiration.validity.valueMissing) {
        cardlError.textContent = 'You need to enter your Card Expiration.'
      } else if (userExpiration.validity.patternMismatch) {
        cardlError.textContent = 'Enter month and year (MM/YY)'
      }
      cardlError.className = 'error active'
    }
  }
}
