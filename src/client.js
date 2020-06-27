import React from 'react';
import { hydrate } from "react-dom";
import App from './client/app';

hydrate(<App />, document.getElementById("app"));