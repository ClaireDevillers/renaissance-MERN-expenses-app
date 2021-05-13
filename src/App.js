
import './App.css';
import Nav from "./components/Nav/Nav.jsx"
import HomePage from "./components/HomePage/HomePage.jsx"
import AddPage from "./components/AddPage/AddPage.jsx"
import ListPage from "./components/ListPage/ListPage.jsx"
import CategoriesPage from "./components/CategoriesPage/CategoriesPage.jsx"

import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Nav />

      <Switch>
        <Route path='/home' render={(props) => (
          <HomePage {...props} />
        )} />
        <Route path='/add' render={(props) => (
          <AddPage {...props} />
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

export default App;
