import React, { Component } from 'react';
import style from "./Modal.module.css"

class Modal extends Component {

  componentDidMount() {
    window.addEventListener ('keydown', this.closeByEsc)
  }

  componentWillUnmount() {
    window.removeEventListener ('keydown', this.closeByEsc)
  }

  closeByEsc = (e) => {
    if (e.code === 'Escape') {
      this.props.toClose()
    }
  }

  render() {
    const {source, toClose} = this.props
    return (
      
      <div onClick={toClose} className={style.Overlay}>
        <div className={style.Modal}>
          <img onClick={toClose} src={source} alt="" />
        </div>
      </div>
    )
  }
}
export default Modal;