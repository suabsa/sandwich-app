import React,{useState} from 'react';
import Header from './components/Header'
import Grid from '@material-ui/core/Grid';
import OrderPage from './components/OrderPage'
import ResultPage from './components/ResultPage'
import OrderService from './services/Order'

const App = () => {
  const [postOrder, setPostOrder] = useState({ 
    data: [], error: false, message: null, stage: ""})
  const [allOrder, setAllOrder] = useState({
    data: [], error: false, message: null, stage: "initial"})

  const getAll = async () =>{
    try{
      const getAllOrder = await OrderService.getAll()
      setAllOrder({...allOrder, data: getAllOrder, stage: "getAll", error:false})
    }catch(e){
      setAllOrder({data: [], error: true, message: e, stage: "error"})
    }
  }

  const findById = async (id) =>{
    try{
      const findById = await OrderService.findOrderById(id)
      setAllOrder({...allOrder, data: findById, stage: "findOrderById", error:false})
    }catch(e){
      setAllOrder({data: [], error: true, message: e, stage: "error"})
    }
  }

  const placeOrder = async (order) =>{
    try{
      const placeOrder = await OrderService.placeOrder(order)
      setPostOrder({...postOrder, data: placeOrder, stage: "placeOrder", error:false})
    }catch(e){
      setPostOrder({data: [], error: true, message: e, stage: "error"})
    }
  }

  return (
    <div className="App">
      <Header/>
      <Grid container direction="row" justify="space-around" alignItems="baseline">
        <Grid container item xs={6} spacing={3} style={{borderRight:'1px solid black', height:'80vh', marginTop:'5vh'}}>
          <OrderPage getAll={()=>getAll()} findById={(num)=>findById(num)} placeOrder = {order=>placeOrder(order)}/>
        </Grid>
        <Grid container item xs={3} spacing={3}>
          <ResultPage allOrder={allOrder}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App