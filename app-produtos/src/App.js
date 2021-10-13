import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Produtos from './components/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './components/Contato';
import Produto from './components/Produto';

const App = () => {
  return (
    
      <div className='App'>
        <Router>
          <Header />
          <div className='content'>
            <Switch>
              <Route path='/' exact component={Produtos} />
              <Route path='/produto/:id' component={Produto} />
              <Route path='/contato' component={Contato} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    
  )
}

export default App;
