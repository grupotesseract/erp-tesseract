import Head from "next/head"
import Grafico from "./grafico"

export default function Home() {
  return (
    <>
      <Head>
        <title>ERP Tesseract</title>
        <meta name="description" content="ERP Para o Grupo Tesseract" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grafico />
    </>
  )
}
