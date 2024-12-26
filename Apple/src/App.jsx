import './App.css'
import Header from './Header/Header'
import React from 'react';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';
import { createBrowserHistory } from 'history';


function App() {
  const customHistory = createBrowserHistory();
  return (

    <>
      <Router history={customHistory}>
        <Header />
        <Switch >
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>


  )
}

export default App
