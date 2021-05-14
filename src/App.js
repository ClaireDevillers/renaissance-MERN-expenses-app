import React from 'react'
import './App.css';
import Nav from "./components/Nav/Nav.jsx"
import HomePage from "./components/HomePage/HomePage.jsx"
import AddPage from "./components/AddPage/AddPage.jsx"
import ListPage from "./components/ListPage/ListPage.jsx"
import CategoriesPage from "./components/CategoriesPage/CategoriesPage.jsx"

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  state = {
    categories: [] // the categorie from the database
  }

  async componentDidMount() {
    try {
      let fetchCats = await fetch('/api/categories')
      let categories = await fetchCats.json()
      this.setState({ categories: categories })
    } catch (err) {
      // console.error(err)
    }
  }

  render() {
    return (

      <div className="App">
        <Nav />

        <Switch>
          <Route path='/home' render={(props) => (
            <HomePage {...props} />
          )} />
          <Route path='/add' render={(props) => (
            <AddPage {...props} categories={this.state.categories} />
          )} />
          <Route path='/list' render={(props) => (
            <ListPage {...props} />
          )} />
          <Route path='/categories' render={(props) => (
            <CategoriesPage {...props} />
          )} />
          <Redirect to="/home" />
        </Switch>
      </div>

    );
  }
}

export default App;
