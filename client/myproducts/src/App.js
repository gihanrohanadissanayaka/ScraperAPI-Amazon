import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navBar/Navbar';
import Products from './components/products/Products';
import UniqueProduct from './components/UniqeProduct/UniqeProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products/search/:searchQuery' component={Products} />
            <Route path='/products/:productId' component={UniqueProduct} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
