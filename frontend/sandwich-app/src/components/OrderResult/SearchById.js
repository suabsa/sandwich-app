import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import {Sandwich} from '../../MockData/SandwichType'

const SearchById = (props) =>{

    const orderList = (props) => {
        return(
            <div>
                {props.order.data[0]!==undefined&&props.order.data[0].sandwichId<=6?
                     <Card key={props.order.data.orderId} style = {{flex:"1 0 auto", margin:"0.5rem", border:"1px solid rgba(1,1,1,.1)"}}>
                     <CardContent>
                         <Typography variant="h5" component="h2">
                             Order {props.order.data[0].orderId} : {Sandwich[props.order.data[0].sandwichId-1].name} 
                         </Typography>
                         <Typography variant="h5" component="h2">
                             Status : {props.order.data[0].status} 
                         </Typography>
                     </CardContent>
                 </Card>   
                :"Error - Invalid sandwich ID"}
            </div>
        )
    }

    return(
        <div>
            {props.stage ==='findOrderById'? <h3>Find an order by its ID</h3> :null}
            {props.order.error!==true ? orderList(props) : "Something went wrong! " + props.order.message}
        </div>
    )
}

export default SearchById