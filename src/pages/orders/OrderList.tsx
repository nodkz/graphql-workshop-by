import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import OrderRow from './OrderRow';
import { OrderList_orderPagination } from './__generated__/OrderList_orderPagination';

interface Props {
  orderPagination: OrderList_orderPagination;
}

class OrderList extends React.Component<Props> {
  static fragment = gql`
    fragment OrderList_orderPagination on OrderPagination {
      count
      items {
        ...OrderRow_order
      }
    }
    ${OrderRow.fragment}
  `;

  render() {
    const { orderPagination } = this.props;

    if (!orderPagination || !orderPagination.items) {
      return <div>No data</div>;
    }

    return (
      <div>
        {orderPagination.items.map((order, i) => {
          if (!order) return <div>Empty element</div>;
          return <OrderRow key={i} order={order} />;
        })}
      </div>
    );
  }
}

export default OrderList;
