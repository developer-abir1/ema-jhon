
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
import useCard from "./hooks/useCard";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./component/Context/AuthProvider";
import PrivetRoute from "./component/PrivetRoute/PrivetRoute";
import Shipping from "./component/Shipping/Shipping";
import useProduct from "./hooks/useProduct";
function App() {

  const [products] = useProduct()

  return (
    <AuthProvider>

      {products.length === 0 ? <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
        :

        <Router>
          <Header  ></Header>
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
            <PrivetRoute path="/inventory">
              <Inventory></Inventory>
            </PrivetRoute>
            <Route path="/place+order">
              <PlaceOrder></PlaceOrder>
            </ Route>
            <PrivetRoute path="/shipping">
              <Shipping></Shipping>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>


        </Router>
      }
    </AuthProvider>


  );
}

export default App;
