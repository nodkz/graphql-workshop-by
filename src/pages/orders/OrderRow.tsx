import React from 'react';
import gql from 'graphql-tag';
import { OrderRow_order } from './__generated__/OrderRow_order';

interface Props {
  order: OrderRow_order;
}

class OrderRow extends React.Component<Props> {
  static fragment = gql`
    fragment OrderRow_order on Order {
      orderID
      orderDate
      customerID
      employeeID
      employee {
        firstName
        lastName
        birthDate
      }
      customer {
        companyName
      }
      freight
    }
  `;

  render() {
    const { order } = this.props;
    const { orderDate, orderID, customerID, employee } = order;

    return (
      <div>
        <div className="row">
          <div className="col-sm-1">{order.orderID}</div>
          <div className="col-sm-2">{order.customer && order.customer.companyName}</div>
          {employee && (
            <div className="col-sm-2">
              {employee.firstName} {employee.lastName} (id:{order.employeeID})
            </div>
          )}
          {/* <div className="col-sm-2">
          {order.shipper && order.shipper.companyName} (id:{order.shipVia})
        </div> */}
          <div className="col-sm-2">{`${order.orderDate || ''}`.substr(0, 10)}</div>
          <div className="col-sm-2">{order.freight}</div>
        </div>
        {/* {order.orderID && <ToggleOrder id={order.orderID} />} */}
      </div>
    );
  }
}

export default OrderRow;
