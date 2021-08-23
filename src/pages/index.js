import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout title="Kat and Steves' Wedding">
      <div>
        <h1 style={{'fontFamily': 'Geffry'}}>Welcome!</h1>
        <p>Kat and Steve's Wedding</p>
        <p>August 26th, 2021</p>
        <StaticImage 
          src="../images/sunglasses.jpg" 
          height="600px"
          alt="Sunglasses" 
        />
      </div>
    </Layout>
  )
}

export default IndexPage
