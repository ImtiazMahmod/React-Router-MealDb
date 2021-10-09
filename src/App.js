import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AllNews from './Components/AllNews/AllNews';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MealDetails from './Components/MealDetails/MealDetails';
import NotFound from './Components/NotFound/NotFound';
import Restuarants from './Components/Restuarants/Restuarants';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/restaurants">
            <Restuarants></Restuarants>
         </Route>
          {/* route parameter */}
          <Route path="/restaurant/:mealId">
            <MealDetails></MealDetails>
          </Route>
          {/* special case */}
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
