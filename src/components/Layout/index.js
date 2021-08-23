import React from "react"
import Container from '@material-ui/core/Container'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Navigation from "../Navigation"
import Footer from "../Footer"
import './layout.scss'

const theme = createTheme({
    palette: {
      primary: {
        main: '#e2cabf',
      },
      secondary: {
        main: '#0044ff',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

const Layout = ({ title, children }) => {
    return (
    <ThemeProvider theme={theme}>
        <main>
            <Helmet>
                <title>{title ? title : "Kat and Steves' Wedding"}</title>
                <link rel="shortcut icon" href="../../images/icon.png" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> 
            </Helmet>
            <Navigation />
            <Container>
                { children }
            </Container>
            <Footer />
        </main> 
    </ThemeProvider> 
    )
}

export default Layout