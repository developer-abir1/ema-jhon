
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import OrderReview from "./component/OrderReview/OrderReview";
import Inventory from "./component/Inventory/Inventory";
import PlaceOrder from "./component/PlaceOrder/PlaceOrder";
function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/place+order">
            <PlaceOrder></PlaceOrder>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>


      </Router>
    </div>

  );
}

export default App;
