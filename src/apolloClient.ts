import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: 'https://graphql-compose.herokuapp.com/northwind/',
  // uri: 'http://localhost:4444/northwind/',
  fetch,
  credentials: 'same-origin',
  headers: {},
});

const link = ApolloLink.from([httpLink]);

export const apolloClient = new ApolloClient({
  cache,
  link,
});

// const query = gql___`
//   {
//     viewer {
//       orderPagination(perPage: 3, page: 1, sort: ORDERID_ASC) {
//         count
//         items {
//           orderID
//           customerID
//           customer {
//             companyName
//             orderList {
//               orderID
//             }
//           }
//         }
//       }
//       regionList {
//         name
//       }
//     }
//   }
// `;
// console.log('DocumentNode:', query);
// apolloClient.query({ query }).then((res: any) => console.log(`Result:`, res));
