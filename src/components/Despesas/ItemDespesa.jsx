import React, { useState } from 'react'
import Card from '../UI/Card'
import DataDespesa from './DataDespesa'
import './ItemDespesa.css'

function ItemDespesa(props) {
  return (
    <Card className="expense-item">
      <DataDespesa data={props.data} />
      <div className="expense-item__description">
        <h2>{props.titulo}</h2>
        <div className="expense-item__price">${props.valor}</div>
      </div>
    </Card>
  )
}

export default ItemDespesa
