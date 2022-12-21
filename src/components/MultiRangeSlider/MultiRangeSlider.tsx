import React, { useCallback, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './MultiRangeSlider.module.scss'

const MultiRangeSlider = ({
  fieldsetName,
  min,
  max,
  onChange,
}: {
  fieldsetName: string
  min: number
  max: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any
}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    const rangeCurrent = range.current as unknown as HTMLElement

    if (rangeCurrent) {
      rangeCurrent.style.left = `${minPercent}%`
      rangeCurrent.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)
    const rangeCurrent = range.current as unknown as HTMLElement

    if (rangeCurrent) {
      rangeCurrent.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  return (
    <fieldset className="dualrange_container">
      <h3 className={styles.fieldset_title}>{fieldsetName}</h3>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1)
          setMinVal(value)
          minValRef.current = value
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? '5' : '' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1)
          setMaxVal(value)
          maxValRef.current = value
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </fieldset>
  )
}

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MultiRangeSlider
