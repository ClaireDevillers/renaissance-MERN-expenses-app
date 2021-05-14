import { useState, useEffect } from 'react'
import './App.css';
import Nav from "./components/Nav/Nav.jsx"
import HomePage from "./components/HomePage/HomePage.jsx"
import AddPage from "./components/AddPage/AddPage.jsx"
import ListPage from "./components/ListPage/ListPage.jsx"
import CategoriesPage from "./components/CategoriesPage/CategoriesPage.jsx"

import { Route, Switch, Redirect } from 'react-router-dom';

function App(props) {
  const [list, setList] = useState([])
  const [categories, setCategories] = useState([])
  //const [error, setError] = useState("")

  useEffect(() => {
    async function fetchList() {
      const fetchResponse = await fetch('/api/expenses')
      const list = await fetchResponse.json()
      setList(list);
    }
    fetchList()

    async function fetchCats() {
      let fetchResponse = await fetch('/api/categories')
      let cats = await fetchResponse.json()
      setCategories(cats)
    }
    fetchCats()

  }, [])

  return (

    <div className="App">
      <Nav />

      <Switch>
        <Route path='/home' render={(props) => (
          <HomePage {...props} list={list} calculateCategoryValues={calculateCategoryValues} />
        )} />
        <Route path='/add' render={(props) => (
          <AddPage {...props} categories={categories} setList={setList} />
        )} />
        <Route path='/list' render={(props) => (
          <ListPage {...props} list={list} setList={setList} />
        )} />
        <Route path='/categories' render={(props) => (
          <CategoriesPage {...props} categories={categories} list={list} calculateCategoryValues={calculateCategoryValues} />
        )} />
        <Redirect to="/home" />
      </Switch>
    </div>

  );
}

// function to organize our category information to make the PieChart happy
function calculateCategoryValues(list) {
  if (!list) return []
  let data = []
  let cat_values = {}
  for (let item of list) {
      if (cat_values[item.category]) {
          cat_values[item.category] += item.amount
      } else {
          cat_values[item.category] = item.amount
      }
  }
  for (let key in cat_values) {
      data.push({
          title: key,
          value: cat_values[key],
          color: getColourByCategory(key)
      })
  }
  return data
}

function getColourByCategory(colour) {
  let obj = {
      "Groceries":"#EC7063",
      "Home":"#85C1E9",
      "Dining out":"#F7DC6F",
      "Health":"#58D68D",
      "Books": "#F2D7EE",
      "Music":"#CCFBFE",
      "Games":"#335C67",
  }
  return obj[colour]
}

export default App;
