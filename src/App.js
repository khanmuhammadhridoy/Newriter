import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import NotFound from "./Components/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Deals from "./Components/Deals/Deals";
import AddBooks from "./Components/Admin/AddBooks/AddBooks";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          

          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/deals">
            <Deals></Deals>
          </PrivateRoute>
          
          <PrivateRoute path="/addbooks">
            <AddBooks></AddBooks>
          </PrivateRoute>
          {/* <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/destination/">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/ride/:id">
            <Destination></Destination>
          </PrivateRoute> */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
