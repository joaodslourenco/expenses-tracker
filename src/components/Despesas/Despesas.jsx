import ItemDespesa from './ItemDespesa'
import './Despesas.css'
import Card from '../UI/Card'
import FiltroDespesas from './FiltroDespesas'
import { useState } from 'react'

function Despesas(props) {
  const [filtro, setFiltro] = useState('2019')
  function anoSelecionado(ano) {
    console.log(ano)
    setFiltro(ano)
  }

  return (
    <div>
      <Card className="expenses">
        <FiltroDespesas
          filtroSelecionado={filtro}
          filtroRecebido={anoSelecionado}
        />
        <ItemDespesa
          titulo={props.itens[0].titulo}
          valor={props.itens[0].valor}
          data={props.itens[0].data}
        />
        <ItemDespesa
          titulo={props.itens[1].titulo}
          valor={props.itens[1].valor}
          data={props.itens[1].data}
        />
        <ItemDespesa
          titulo={props.itens[2].titulo}
          valor={props.itens[2].valor}
          data={props.itens[2].data}
        />
        <ItemDespesa
          titulo={props.itens[3].titulo}
          valor={props.itens[3].valor}
          data={props.itens[3].data}
        />
      </Card>
    </div>
  )
}

export default Despesas
