import React, { useReducer } from "react";
import "./App.css";
import { MyProvider } from "./Context";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Edit, List } from "./pages";
import { reducer } from "./store";

function App() {
  return (
    <MyProvider
      value={useReducer(reducer, {
        posts: []
      })}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </MyProvider>
  );
}

export default App;
