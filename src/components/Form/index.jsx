import React from 'react'
import estilos from './Form.module.css'

export const Form = () => {
  return (
    <form>
      <input className={estilos.campoTexto} type="text" placeholder='Ex: Pikachu' />
      <button className={estilos.botao}>Enviar</button>
    </form>
  )
}
