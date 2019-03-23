import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import OrderRow from './OrderRow';
import { OrderListQuery } from './__generated__/OrderListQuery';

class QueryTyped extends Query<OrderListQuery> {}

class OrderList extends React.Component {
  render() {
    return (
      <QueryTyped
        query={gql`
          query OrderListQuery {
            viewer {
              orderPagination {
                count
                items {
                  ...OrderRow_order
                }
              }
            }
          }
          ${OrderRow.fragment}
        `}
      >
        {({ error, loading, data }) => {
          if (loading) return <div>Loading...</div>;
          if (
            data &&
            data.viewer &&
            data.viewer.orderPagination &&
            data.viewer.orderPagination.items
          ) {
            return (
              <div>
                {data.viewer.orderPagination.items.map((order, i) => {
                  if (!order) return <div>Empty element</div>;
                  return <OrderRow key={i} order={order} />;
                })}
              </div>
            );
          }
        }}
      </QueryTyped>
    );
  }
}

export default OrderList;
