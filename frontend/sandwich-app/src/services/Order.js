import axios from 'axios'
const baseUrl = "http://localhost:8080/v1/order";

/*
**  /order Get a list of all orders. Empty array if no orders are found.
*/
const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};


/*
**  /order Add an order for an sandwich
*/
  
const placeOrder = async (order) => {
    const response = await axios.post(baseUrl, order)
    return response.data;
};

/*
**  /order/{orderId} Find an order by its ID
*/
const findOrderById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data;
};

export default { getAll, placeOrder, findOrderById};