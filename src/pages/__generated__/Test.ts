/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Test
// ====================================================

export interface Test_viewer_category {
  __typename: "Category";
  description: string | null;
  name: string | null;
}

export interface Test_viewer_orderPagination_items_customer_orderList {
  __typename: "Order";
  orderID: number | null;
}

export interface Test_viewer_orderPagination_items_customer {
  __typename: "Customer";
  companyName: string | null;
  orderList: (Test_viewer_orderPagination_items_customer_orderList | null)[] | null;
}

export interface Test_viewer_orderPagination_items {
  __typename: "Order";
  orderID: number | null;
  customerID: string | null;
  customer: Test_viewer_orderPagination_items_customer | null;
}

export interface Test_viewer_orderPagination {
  __typename: "OrderPagination";
  count: number | null;
  items: (Test_viewer_orderPagination_items | null)[] | null;
}

export interface Test_viewer_regionList {
  __typename: "Region";
  name: string | null;
}

export interface Test_viewer {
  __typename: "Viewer";
  category: Test_viewer_category | null;
  orderPagination: Test_viewer_orderPagination | null;
  regionList: (Test_viewer_regionList | null)[] | null;
}

export interface Test {
  viewer: Test_viewer | null;
}
