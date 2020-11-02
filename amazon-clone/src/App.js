import  React,{useEffect} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { auth } from "./components/firebase";

import Home from "./pages/Home"
import Header from "./components/Header"
import Login from "./components/Login"

import dotenv from "dotenv"


function App() {
  dotenv.config()
  const [{}, dispatch] = useStateValue();

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
                      }
                    });
        }, [dispatch]);

  return (
    <div>
        <Router>
          <Switch>
            <Route path="/" exact >
            <Header/>
            <Home/>

            </Route>
            <Route path="/login" >
            <Login/>

            </Route>
                
          </Switch>
        </Router>
    </div>
  );
}

export default App;
