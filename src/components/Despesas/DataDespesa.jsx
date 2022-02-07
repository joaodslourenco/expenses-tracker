import React from 'react'
import './DataDespesa.css'

function DataDespesa(props) {
  const mes = props.data.toLocaleString('pt-BR', { month: 'long' })
  const dia = props.data.toLocaleString('pt-BR', { day: '2-digit' })
  const ano = props.data.getFullYear()

  return (
    <div className="expense-date">
      <div>
        <div className="expense-date__day">{dia}</div>
        <div className="expense-date__month">{mes}</div>
        <div className="expense-date__year">{ano}</div>
      </div>
    </div>
  )
}

export default DataDespesa
