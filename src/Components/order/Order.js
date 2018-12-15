import React, { Component } from 'react';
import OrderService from '../services/OrderService';

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };
    }

    getAll = () => {
        OrderService.getList()
          .then(response => {
              this.setState({orders: response.data});
          })
          .catch(error => console.log(error))
    }

    render() {
        if (this.state.orders) {
        return(
            <div>
            {this.state.orders.map(order =>
                <tr>
                  <td>{order.descriptionOrder}</td>

                </tr>
)}
</div>
        )

    }
}
}

export default Order;