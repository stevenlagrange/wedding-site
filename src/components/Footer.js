import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'inherit',
        textAlign: 'center',
        paddingBottom: '24px'
      } 
})


const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.footer}>
            #finallyalagrange
        </div>
    )
}

export default Footer