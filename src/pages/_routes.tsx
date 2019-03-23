import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './';
import Error from './_error';
import OrderRoutes from './orders';

export default function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/orders" component={OrderRoutes} />
      <Route
        path="/products"
        render={() => {
          return <div>Products</div>;
        }}
      />
      <Route
        path="/customers"
        render={() => {
          return <div>Customers</div>;
        }}
      />
      <Route component={Error} />
    </Switch>
  );
}
