import React, {useState} from 'react';
import { Sandwich } from '../MockData/SandwichType'
import AddOrder from './Order/AddOrder'
import FindOrder from './Order/FindOrder'
import GetOrder from './Order/GetOrder'
import Grid from '@material-ui/core/Grid';

const OrderPage = (props) => {
    const mockData = useState(Sandwich)

    return (
          <Grid container  direction="column" justify="space-between"  alignItems="flex-start">
            <AddOrder  mockData = {mockData} placeOrder={props.placeOrder}/>
            <FindOrder findById = {props.findById}/>
            <GetOrder getAll={props.getAll}/>  
          </Grid>  
    )
}

export default OrderPage