import Login from './components/Login';
import LoginDTI from './components/LoginDTI'
import Redirect from './components/Redirect'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return(
    <>
    <Router>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/microsoft" component={Login}/>
          <Route path="/dtidigital" component={LoginDTI}/>
          <Route path="/redirect" component={Redirect}/>
      </Switch>
    </Router>
    </>
  )
  
}

export default App;
