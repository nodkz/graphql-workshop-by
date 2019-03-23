import React, { Component } from 'react';
import { History } from 'history';
import { Container } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import Menu from '../components/Menu';
import AppRoute from './_routes';

interface Props {
  history: History;
}

class App extends Component<Props> {
  render() {
    const { history } = this.props;
    return (
      <Container>
        <Router history={history}>
          <Menu />
          <AppRoute />
        </Router>
      </Container>
    );
  }
}

export default App;
