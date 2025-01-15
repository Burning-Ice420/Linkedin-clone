import "./App.css";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route, useActionData } from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import { useEffect } from "react";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";
import { applyMiddleware } from "redux";

function App(props) {
  useEffect(() =>{
    props.getUserAuth();
  } , []);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Login />} />

          {/* Home Route with Header and Home */}
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return {};
};

const mapDispatchToProps = (dispatch) =>({
  getUserAuth: () => dispatch(getUserAuth()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);