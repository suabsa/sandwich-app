import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FindOrder = (props) => {
    const [orderId,setOrderId] = useState(0)
    return(
        <div>
            <h3>
                Find an order by its ID
            </h3>
            <div style={{marginBottom:"5px"}}>
              <TextField id="order-id" variant="outlined" size="small" label="Order ID" onChange = {(e)=>{
                  e.preventDefault()
                  setOrderId(+e.target.value)
              }}/>
            </div>
            <div>
              <Button variant="outlined"  size="small" color="primary" onClick = {(e)=>{
                  e.preventDefault()
                  props.findById(orderId)
              }}> Search </Button>
            </div>
        </div>
    )
}

export default FindOrder