import React from 'react';
import Button from '@material-ui/core/Button';

const GetOrder = (props) => {
    return(
        <div>
            <h3>Get a list of all orders</h3>
            <Button onClick = {props.getAll} variant="outlined" color="primary">Get Order</Button>
        </div>
    )
}

export default GetOrder