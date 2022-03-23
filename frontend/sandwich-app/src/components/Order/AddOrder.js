import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const AddOrder = (props) =>{
    const sandwichType = props.mockData[0].map(sandwich => {
        return(
            <Card key={sandwich.name} style = {{flex:"1 0 auto", margin:"0.5rem", border:"1px solid rgba(1,1,1,.1)"}}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {sandwich.name}
                    </Typography>
                    <Typography variant="body2">
                        cost : temp - Quantity: temp
                        <Button size="small" variant="outlined" color="primary" style={{marginLeft:".5rem"}} onClick={()=>{
                            let randId = Math.floor(Math.random() * 1000 + 1)
                            props.placeOrder({
                                id: randId,
                                sandwichId: sandwich.id,
                                status: "inQueue"
                            })
                        }}>Order</Button>
                    </Typography>
                </CardContent>
            </Card>
        )
    })

    return(
        <div>
            <h3>Add an order for a sandwich</h3>
            <Grid container item xs={12} spacing={3}>
               {sandwichType}
            </Grid>
           
        </div>
    )
}

export default AddOrder