import React from 'react'
import {Box} from "../UI"
import {extratoLista} from "../../info";
import Itens from "../Itens";

const Extrato = () => {
  return (
    <Box>
      {
        extratoLista.updates.map(({ id, type, from, value, date }) => {
          return (
            <div><Itens key={id} type={type} from={from} value={value} date={date} /></div>
          )})
      }
    </Box>
  )
}

export default Extrato
