import './ListaDespesas.css'
import ItemDespesa from './ItemDespesa'

export default function ListaDespesas(props) {
  return (
    <div>
      {props.despesas.length === 0 ? (
        <p>Não existem despesas para o ano selecionado.</p>
      ) : (
        props.despesas.map(despesa => (
          <ItemDespesa
            key={despesa.id}
            titulo={despesa.titulo}
            valor={despesa.valor}
            data={despesa.data}
          />
        ))
      )}
    </div>
  )
}
