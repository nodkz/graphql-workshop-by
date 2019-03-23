import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default function Index() {
  return (
    <div>
      <Query
        query={gql`
          query Test {
            viewer {
              category {
                description
                name
              }
              orderPagination(perPage: 3, page: 1, sort: ORDERID_ASC) {
                count
                items {
                  orderID
                  customerID
                  customer {
                    companyName
                    orderList {
                      orderID
                    }
                  }
                }
              }
              regionList {
                name
              }
            }
          }
        `}
      >
        {({ error, loading, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>{error.message}</div>;
          if (data) return <div>{JSON.stringify(data)}</div>;
        }}
      </Query>
      <Jumbotron>
        <div className="row">
          <div className="col-sm-12">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2>
                Northwind data explorer via GraphQL
                <br />
              </h2>
            </div>
            <p>
              This is a true story. The events depicted took place in <b>Northwind company</b> in{' '}
              <b>1996-1998</b>. At the request of the survivors, the names have been changed. Out of
              respect for the dead, the rest has been told exactly as it occurred.
            </p>
            <p style={{ textAlign: 'right', fontWeight: 'bold' }}>© Fargo</p>
          </div>
        </div>
      </Jumbotron>

      <div>
        <h4>Source code of this client app</h4>
        <a href="https://github.com/nodkz/graphql-workshop-by/tree/master/client" target="_blank">
          https://github.com/nodkz/graphql-workshop-by/tree/master/client
        </a>
      </div>
      <br />
      <div>
        <h4>Source code of server-side</h4>
        <a
          href="https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind"
          target="_blank"
        >
          https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind
        </a>
      </div>
    </div>
  );
}
