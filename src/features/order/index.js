import React from "react";
import fetchApi from "../../modules/fetch-api";

class Order extends React.Component {
  state = {
    order: null
  };
  componentDidMount() {
    fetchApi(
      "get",
      `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`
    ).then(json => {
      this.setState({
        order: json
      });
    });
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order;
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Order info</h3>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                product,
                qty,
                product: { name, image, price }
              } = item;
              return (
                <div>
                  <img src={image} width={32} />
                  {name}({qty} @ ${price})=
                  <b>${parseFloat(qty) * parseFloat(price)}</b>
                </div>
              );
            })}
        </ul>
      </div>
    );
  }

  render() {
    const { order } = this.state;
    return (
      <div>
        {order ? (
          this.renderOrder()
        ) : (
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Order;
