import Image from "next/image"
import React from "react"
import logo from "../public/logo-white-1080p.png"
import styles from "../styles/Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image src={logo} alt="Logo" width={150} height={150} />
      <h1 className={styles.titulo}>Tesseract ERP</h1>
    </div>
  )
}

export default Logo
