import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Mensagem from "../pages/Mensagem";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact render={() => <Home />} /> */}
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
