import  React,{useEffect} from "react"
import {useHistory,BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { auth } from "./components/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Home from "./pages/Home"
import Header from "./components/Header"
import Login from "./components/Login"
import Checkout from "./components/Checkout"
import Payment from "./components/Payment";
import Orders from "./components/Orders";




const promise = loadStripe(
"YOUR STRIPE PUBLISHABLE KEY"     );
//Publishable key

function App() {

  const [{}, dispatch] = useStateValue();
  const history = useHistory();


        useEffect(() => {

          auth.onAuthStateChanged((authUser) => {
                          console.log("THE USER IS >>> ", authUser);

                      if (authUser) {
                        // the user just logged in / the user was logged in

                        dispatch({
                          type: "SET_USER",
                          user: authUser,
                        });
                      } else {
                        // the user is logged out
                        dispatch({
                          type: "SET_USER",
                          user: null,
                        });
                        history.push("/")
                      }
                    });
        }, [dispatch,history]);

  return (
    <Router>
      <div className="App">
        <Switch>
              <Route path="/login">
                  <Login />
              </Route>

              <Route path="/orders">
                  <Header />
                  <Orders />
              </Route>
              
              <Route path="/checkout">
                  <Header />
                  <Checkout />
              </Route>

              <Route path="/payment">
                   <Header />
                   <Elements stripe={promise}>
                       <Payment />
                    </Elements>
              </Route>

              <Route path="/">
                    <Header />
                    <Home />
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
