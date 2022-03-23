import React from 'react';
import OrderList from './OrderResult/OrderList'
import SearchById from './OrderResult/SearchById'

const ResultPage = (props) => {

    return (
        <div>
            <h1>Result Page:</h1>
            {props.allOrder.stage==="getAll" && <OrderList order={props.allOrder} stage = {"getAll"} /> }
            {props.allOrder.stage==="error" && "Something went wrong while connect to server! " + props.allOrder.message.toString()}
            {props.allOrder.stage==="findOrderById" && <SearchById order={props.allOrder} stage = {"findOrderById"} />}

        </div>
    )
}

export default ResultPage