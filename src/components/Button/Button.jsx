import React from 'react';

import style from "./Button.module.css"

const Button = function ({toAdd}) {
  return (
    <button className={style.Button} onClick={toAdd} type='button'> Load more.. </button>
  )
}
export default Button;