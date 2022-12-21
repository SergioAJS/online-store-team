export const RangeDual = (lowerId: string, upperId: string) => {
  const lowerSlider = document.getElementById(lowerId) as HTMLFormElement
  const upperSlider = document.getElementById(upperId) as HTMLFormElement
  let lowerVal = parseInt(lowerSlider.value)
  let upperVal = parseInt(upperSlider.value)

  upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value)
    upperVal = parseInt(upperSlider.value)

    if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4

      if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4
      }
    }
  }

  lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value)
    upperVal = parseInt(upperSlider.value)

    if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4

      if (upperVal == upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - 4
      }
    }
  }
}
