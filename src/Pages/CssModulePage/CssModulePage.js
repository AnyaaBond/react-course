import React from 'react'
import css from './CssModulePage.module.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input'

function CssModulePage () {
  return (
    <div className={css.wrapper}>
      <div className={css.list}>
        <Button className={css.btn} isRed label='Кнопка' />
        <Input className={css.inp} isWide label='Инпут:' />
      </div>
    </div>
  )
}

export default CssModulePage
