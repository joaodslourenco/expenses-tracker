import React from 'react'

import './NovaDespesa.css'

function BotaoAdicionarDespesas(props) {
  return (
    <div className="new-expense">
      <button type="submit" onClick={props.toggleForm}>
        Adicionar despesa
      </button>
    </div>
  )
}

export default BotaoAdicionarDespesas
