import logo from "./logo.svg";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import AddCustomer from "./Components/AddCustomer";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import store from "./store/index";
import Companies from "./Components/Companies";
import FileCompanies from "./Components/FileCompanies";
import Carriers from "./Components/Carriers";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import LoginPage from "./Components/Login";
import SaveFile from "./Components/SaveFile";
import ProtectedRoute from "./Components/ProtectedRoute";
import history from "./history";
import * as types from "./store/action/types";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token && localStorage.user) {
  // setAuthToken to HTTP header
  setAuthToken(localStorage.token);

  // redux setup for user data
  store.dispatch({ type: types.LOGIN, payload: JSON.parse(localStorage.user) });
}
const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Switch>
          <ProtectedRoute exact path="/view/:userId/:id/:status">
            <FileCompanies />
          </ProtectedRoute>

          <ProtectedRoute exact path="/view/:id/:companyname">
            <Companies />
          </ProtectedRoute>

          <ProtectedRoute exact path="/home">
            <Home />
          </ProtectedRoute>
          <Route exact path="/search/:keyword">
            <Home />
          </Route>

          <ProtectedRoute exact path="/carry">
            <Carriers />
          </ProtectedRoute>

          <Route exact path="/sign">
            <SignUp />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <ProtectedRoute exact path="/">
            <AddCustomer />
          </ProtectedRoute>

          <ProtectedRoute exact path="/savefile/:id">
            <SaveFile />
          </ProtectedRoute>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
