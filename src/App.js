import './App.css';
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'
import { Switch ,Route} from'react-router-dom'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer'
import Navlinks from './Navlinks'
function App() {
  return(
    <>
    <div className="App">
   
    <BrowserRouter>
    <Switch>
   
      <Route exact path="/Checkout">
      <Header/>
      <Checkout/>

      </Route>
      <Route exact path="/Login">
      <Login/>
      </Route>
      <Route exact path="/">

      <Header/>
      <Navlinks/>
      <Home/>
      <Footer/>
      </Route>


    
    </Switch>
    </BrowserRouter>
    
    </div>
    </>
  );
}

export default App;
 