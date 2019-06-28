import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import Amplify from 'aws-amplify'
import config from './aws-exports'
import registerServiceWorker from './registerServiceWorker';

Amplify.configure(config)

// MDB Stuff


  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );

registerServiceWorker();