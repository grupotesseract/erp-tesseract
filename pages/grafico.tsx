import React from "react"
import { Line, ResponsiveLine } from "@nivo/line"

/*
Useful links:
https://nivo.rocks/line/
https://nivo.rocks/guides/theming/
https://nivo.rocks/storybook/?path=/story/line--stacked-lines
 */

const Grafico = ({ receitas, despesas, saldo }) => {
  const getPointList = data => {
    return data.map(item => {
      return {
        x: item.date.substring(3),
        y: item.value
      }
    })
  }

  const data = [
    {
      id: "Receitas",
      data: getPointList(receitas)
    },
    {
      id: "Despesas",
      data: getPointList(despesas)
    },
    { id: "Saldo", data: getPointList(saldo) }
  ]

  console.log("okay", data.length)
  return (
    <div>
      <Line
        theme={{ textColor: "#fff" }}
        data={data}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false
        }}
        yFormat={value =>
          `${Number(value).toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })} ₽`
        }
        width={1500}
        height={600}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Mês",
          legendOffset: 36,
          legendPosition: "middle"
        }}
        pointSize={10}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(200, 200, 200, .3)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
  /*  <ResponsiveLine

  axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
  }}
  pointSize={10}
  pointColor={{ theme: 'background' }}
  pointBorderWidth={2}
  pointBorderColor={{ from: 'serieColor' }}
  pointLabelYOffset={-12}
  useMesh={true}
  legends={[
      {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
              {
                  on: 'hover',
                  style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1
                  }
              }
          ]
      }
  ]}
/> */
}

export default Grafico

export async function getServerSideProps() {
  const receitas = await fetch(` http://localhost:3000/api/receitas `)
  const dataReceitas = await receitas.json()
  const despesas = await fetch(` http://localhost:3000/api/despesas `)
  const dataDespesas = await despesas.json()
  const saldo = await fetch(` http://localhost:3000/api/saldo `)
  const dataSaldo = await saldo.json()
  return {
    props: {
      receitas: dataReceitas,
      despesas: dataDespesas,
      saldo: dataSaldo
    }
  }
}
