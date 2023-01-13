import React from "react"
import styles from "../styles/SideMenu.module.css"
import Logo from "./Logo"
import Menu from "./Menu"

const SideMenu = ({ children }) => {
  return (
    <div className={styles.sideMenu}>
      <aside>
        <Logo />
        <Menu />
      </aside>
      <main>{children}</main>
    </div>
  )
}

export default SideMenu
