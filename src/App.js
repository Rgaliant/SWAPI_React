import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import "./styles.scss";

const App = () => <Route exact path="/" component={Home} />;

export default App;
