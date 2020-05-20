import css from './Input.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

function Input ({ className, isWide, label }) {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const inpClass = classNames(
    css.inp,
    className,
    {
      [css.wide]: isWide,
      'inp-focused': isFocused,
      'inp-hover': !isFocused && isHovered
    }
  )

  return (
    <div>
      <label className='label'>{label}</label>
      <input
        className={inpClass}
        onFocus={() => { setIsFocused(true) }}
        onBlur={() => { setIsFocused(false) }}
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
      />
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  isWide: PropTypes.bool,
  label: PropTypes.string
}

export default Input
