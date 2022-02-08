import ItemDespesa from './ItemDespesa'
import './Despesas.css'
import Card from '../UI/Card'
import FiltroDespesas from './FiltroDespesas'
import { useState } from 'react'
import ListaDespesas from './ListaDespesas'
import DespesasChart from './DespesasChart'

function Despesas(props) {
  const [filtro, setFiltro] = useState('2021')
  function anoSelecionado(ano) {
    console.log(ano)
    setFiltro(ano)
  }

  const despesasFiltradas = props.itens.filter(
    despesa => despesa.data.getFullYear() == filtro
  )

  return (
    <div>
      <Card className="expenses">
        <FiltroDespesas
          filtroSelecionado={filtro}
          filtroRecebido={anoSelecionado}
        />
        <DespesasChart despesas={despesasFiltradas} />
        <ListaDespesas despesas={despesasFiltradas} />
      </Card>
    </div>
  )
}

export default Despesas
