import React from "react"
import { ChartPoint } from "../types/ChartPoint"

const Despesas = ({ data }: { data: ChartPoint[] }) => {
  return (
    <div>
      Despesas
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(item.value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Despesas

export async function getServerSideProps() {
  const res = await fetch(` http://localhost:3000/api/despesas `)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
