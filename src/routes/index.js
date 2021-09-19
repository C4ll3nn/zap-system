import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Mensagem from "../pages/Mensagem";

const Routes = () => {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact>
          <Dashboard />
        </Route>

        <Route path="/mensagens">
          <Mensagem />
        </Route>        

        <Route>404 Not Found</Route>
      </Switch>
    </Router>
  );
};

export default Routes;
