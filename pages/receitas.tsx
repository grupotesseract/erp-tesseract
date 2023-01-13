import React from "react"
import { ChartPoint } from "../types/ChartPoint"

const Receitas = ({ data }: { data: ChartPoint[] }) => {
  return (
    <div>
      Receitas
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

export default Receitas

export async function getServerSideProps() {
  const receitas = await fetch(` http://localhost:3000/api/receitas `)
  const data = await receitas.json()
  return {
    props: {
      data
    }
  }
}
