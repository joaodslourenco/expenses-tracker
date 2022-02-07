import './App.css'
import Despesas from './components/Despesas/Despesas'
import NovaDespesa from './components/Despesas/NovaDespesa/NovaDespesa'

function App() {
  const despesas = [
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

  function adicionarDespesa(despesa) {
    console.log('dentro do App.js')
    console.log(despesa)
  }

  return (
    <div>
      <NovaDespesa aoAdicionarDespesa={adicionarDespesa} />
      <Despesas itens={despesas} />
    </div>
  )
}

export default App
