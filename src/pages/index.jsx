import React from "react"
import "../styles/index.scss"
import { Header, Opening, Skills, Works, Contacts, Quote, Footer } from "../components"

export default function Home() {
  return (
    <>
      <Header />
      <Opening />
      <Skills />
      <Works />
      <Contacts />
      <Quote />
      <Footer />
    </>
  )
}
