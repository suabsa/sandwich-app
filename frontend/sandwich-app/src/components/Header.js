import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import mainLogo from '../assets/sandwich.png'

const Header =()=>{
    return(
        <AppBar position="static" style={{ background: '#100000' }}>
        <Toolbar >
            <Typography variant="h6" style={{ flex: 1 }}>
                <img alt="LOGO" src={mainLogo} style ={{height:'20px', paddingRight:'10px'}}/>
                Sandwich app
            </Typography>
            <Button color="inherit">Login (Not sure)</Button>
        </Toolbar>
        </AppBar>
    )
}
export default Header