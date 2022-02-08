import { useState } from 'react'
import './App.css'
import Despesas from './components/Despesas/Despesas'
import NovaDespesa from './components/Despesas/NovaDespesa/NovaDespesa'
import BotaoAdicionarDespesa from './components/Despesas/NovaDespesa/BotaoAdicionarDespesa'

const despesasMock = [
  {
    id: '1',
    titulo: 'Papel higiênico',
    valor: 10,
    data: new Date(2020, 7, 14)
  },
  {
    id: '2',
    titulo: 'Televisão nova',
    valor: 799.49,
    data: new Date(2021, 2, 12)
  },
  {
    id: '3',
    titulo: 'Seguro carro',
    valor: 294.67,
    data: new Date(2021, 2, 28)
  },
  {
    id: '4',
    titulo: 'Mesa de madeira',
    valor: 450,
    data: new Date(2021, 5, 12)
  }
]

function App() {
  const [despesas, setDespesas] = useState(despesasMock)
  const [formVisivel, setFormVisivel] = useState(false)

  function adicionarDespesa(despesa) {
    setDespesas(despesasAnteriores => {
      return [despesa, ...despesasAnteriores]
    })
  }

  function handleVisibilidadeForm() {
    formVisivel ? setFormVisivel(false) : setFormVisivel(true)
  }

  return (
    <div>
      {formVisivel ? (
        <NovaDespesa
          aoAdicionarDespesa={adicionarDespesa}
          toggleForm={handleVisibilidadeForm}
        />
      ) : (
        <BotaoAdicionarDespesa toggleForm={handleVisibilidadeForm} />
      )}
      <Despesas itens={despesas} />
    </div>
  )
}

export default App
