
import './App.css'
import Inicial from './pages/Inicial'
import ProviderToken from './Contexts'
import Menu from './pages/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {

  return (
    <ProviderToken>

      <Router>
        <div className="container--fundo">




          <Switch>
            <Route path="/menu" >
              <Menu />
            </Route>

            <Route path="/">
              <Inicial />


            </Route>

         
          </Switch>

        </div>


      </Router>

    </ProviderToken>

  );
}

export default App;
