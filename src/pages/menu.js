import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const MenuPage = () => {
    return (
      <Layout>
        <div style={{paddingTop: 24}}>
            <StaticImage 
                src="../images/menu.png" 
                height='600px'
                alt="A menu." 
            />  
        </div>
      </Layout>
    )
  }
  
export default MenuPage