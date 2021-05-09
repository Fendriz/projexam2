import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hotels from "./components/admin/hotels/Hotels";
import CreateHotel from "./components/admin/hotels/CreateHotel";
import UpdateHotel from "./components/admin/hotels/UpdateHotel";
import UpdateHotelId from "./components/admin/hotels/UpdateHotelId";
import Enquiries from "./components/admin/enquiries/Enquiries";
import Messages from "./components/admin/messages/Messages";
import Accounts from "./components/admin/accounts/Accounts";
import Footer from "./components/layout/Footer";

import HotelDetails from "./components/home/hotelcards/HotelDetails";
import Nav from "./components/layout/Nav";
import Contact from "./components/contact/ContactPage";
import "./sass/style.scss";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Nav />

        <body>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/hotel/:id" component={HotelDetails} />
            <ProtectedRoute path="/admin" exact component={CreateHotel} />
            <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
            <ProtectedRoute
              path="/admin/hotels/create"
              exact
              component={CreateHotel}
            />
            <ProtectedRoute
              path="/admin/hotels/update"
              exact
              component={UpdateHotel}
            />
            <ProtectedRoute
              path="/admin/hotels/update/:id"
              exact
              component={UpdateHotelId}
            />
            <ProtectedRoute
              path="/admin/enquiries"
              exact
              component={Enquiries}
            />
            <ProtectedRoute path="/admin/messages" exact component={Messages} />
            <ProtectedRoute path="/admin/accounts" exact component={Accounts} />
            <Redirect to="/" />
          </Switch>
        </body>

        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
