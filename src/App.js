import Login from './components/Login';
import LoginDTI from './components/LoginDTI'
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
      </Switch>
    </Router>
    </>
  )
  
}

export default App;
