import React from "react"
import "../styles/index.scss"
import { Header, Opening, Skills, Works, Contacts, Quote, Footer, MobileMenu } from "../components"

export default function Home() {

  const [mobMenu, setMobMenu] = React.useState(false)

  return (
    <>
      { mobMenu && <MobileMenu setMobMenu={setMobMenu} /> }
      <Header setMobMenu={setMobMenu} />
      <Opening />
      <Skills />
      <Works />
      <Contacts />
      <Quote />
      <Footer />
    </>
  )
}
