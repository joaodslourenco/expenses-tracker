import React, { useState } from 'react'
import './FormularioDespesa.css'

function FormularioDespesa(props) {
  const [titulo, setTitulo] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')

  function salvarDespesa(e) {
    e.preventDefault()

    const dadosDespesa = {
      titulo: titulo,
      valor: +valor,
      data: new Date(data)
    }

    props.aoSalvarDadosDespesa(dadosDespesa)
    console.log(dadosDespesa)
    setTitulo('')
    setValor('')
    setData('')
  }

  return (
    <form onSubmit={salvarDespesa}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Valor</label>
          <input
            type="number"
            value={valor}
            onChange={e => setValor(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={data}
            onChange={e => setData(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.toggleForm}>
          Cancelar
        </button>
        <button type="submit">Adicionar despesa</button>
      </div>
    </form>
  )
}

export default FormularioDespesa
