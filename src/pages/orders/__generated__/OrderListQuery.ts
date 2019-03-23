/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrderListQuery
// ====================================================

export interface OrderListQuery_viewer_orderPagination_items_employee {
  __typename: "Employee";
  firstName: string | null;
  lastName: string | null;
  birthDate: any | null;
}

export interface OrderListQuery_viewer_orderPagination_items_customer {
  __typename: "Customer";
  companyName: string | null;
}

export interface OrderListQuery_viewer_orderPagination_items {
  __typename: "Order";
  orderID: number | null;
  orderDate: any | null;
  customerID: string | null;
  employeeID: number | null;
  employee: OrderListQuery_viewer_orderPagination_items_employee | null;
  customer: OrderListQuery_viewer_orderPagination_items_customer | null;
  freight: number | null;
}

export interface OrderListQuery_viewer_orderPagination {
  __typename: "OrderPagination";
  count: number | null;
  items: (OrderListQuery_viewer_orderPagination_items | null)[] | null;
}

export interface OrderListQuery_viewer {
  __typename: "Viewer";
  orderPagination: OrderListQuery_viewer_orderPagination | null;
}

export interface OrderListQuery {
  viewer: OrderListQuery_viewer | null;
}
