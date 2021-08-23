import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const TimelinePage = () => {
    return (
      <Layout>
        <div style={{paddingTop: 24}}>
            <StaticImage 
              src="../images/timeline.png" 
              height="600px"
              alt="A timeline." 
            />  
        </div>
      </Layout>
    )
  }
  
export default TimelinePage