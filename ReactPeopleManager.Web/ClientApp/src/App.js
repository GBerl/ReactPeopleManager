import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import AddPerson from './components/AddPerson'
import AddPeople from './components/AddPeople'


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/addperson' component={AddPerson} />
            <Route exact path='/addpeople' component={AddPeople} />
      </Layout>
    );
  }
}
