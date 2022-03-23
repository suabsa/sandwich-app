import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import {Sandwich} from '../../MockData/SandwichType'

const OrderList = (props) =>{

    const orderList = props.order.data.map(sandwich => {
        return(
            <div key={sandwich.orderId.toString()} >    
                {sandwich.sandwichId<=6?
                <Card style = {{flex:"1 0 auto", margin:"0.5rem", border:"1px solid rgba(1,1,1,.1)"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Order {sandwich.orderId} : {Sandwich[sandwich.sandwichId-1].name} 
                        </Typography>
                    </CardContent>
                </Card>
                :"Invalid sandwich ID"}
            </div>
        
        )
    })

    return(
        <div>
            {props.stage ==='initial'?
              <h3>Starting app, initially send a post request to get all orders from server.</h3>
              :<h3>Get all orders from server.</h3>}
            {props.order.error!==true ? orderList : "Something went wrong while connect to server! " + props.order.message}
            
        </div>
    )
}

export default OrderList