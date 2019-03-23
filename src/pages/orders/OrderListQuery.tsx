import React from 'react';
import { Query } from 'react-apollo';
import OrderList from './OrderList';
import gql from 'graphql-tag';
import { OrderListQuery as Q } from './__generated__/OrderListQuery';

class QueryTyped extends Query<Q> {}

export default class OrderListQuery extends React.Component {
  render() {
    return (
      <QueryTyped
        query={gql`
          query OrderListQuery {
            viewer {
              orderPagination {
                ...OrderList_orderPagination
              }
            }
          }
          ${OrderList.fragment}
        `}
      >
        {({ error, loading, data }) => {
          if (loading) return <div>Loading...</div>;
          if (data && data.viewer && data.viewer.orderPagination) {
            return <OrderList orderPagination={data.viewer.orderPagination} />;
          }
        }}
      </QueryTyped>
    );
  }
}
