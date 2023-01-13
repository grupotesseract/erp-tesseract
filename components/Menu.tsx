import Link from "next/link"
import React from "react"
import styles from "../styles/Menu.module.css"

const Menu = () => {
  const menuItems = [
    { label: "Gráfico", link: "/grafico" },
    { label: "Despesas", link: "/despesas" },
    { label: "Receitas", link: "/receitas" }
  ]

  return (
    <div className={styles.container}>
      {menuItems.map((item, index) => (
        <Link key={index} href={item.link} className={styles.link}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default Menu
