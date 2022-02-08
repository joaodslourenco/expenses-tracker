import React from 'react'
import FormularioDespesa from './FormularioDespesa'
import './NovaDespesa.css'

function NovaDespesa(props) {
  function salvarNovaDespesa(novaDespesa) {
    const dadosDespesas = {
      ...novaDespesa,
      id: Math.random().toString()
    }
    props.aoAdicionarDespesa(dadosDespesas)
  }

  return (
    <div className="new-expense">
      <FormularioDespesa
        aoSalvarDadosDespesa={salvarNovaDespesa}
        toggleForm={props.toggleForm}
      />
    </div>
  )
}

export default NovaDespesa
