import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout"
import Thanks from "./components/Thanks"
export const config = {
  endpoint: `https://qkart-frontend-bnh8.onrender.com`,
};

function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Products} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/thanks" component={Thanks} />
    </Switch>
    </div>
  );
}

export default App;
