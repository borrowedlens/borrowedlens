import * as functions from 'firebase-functions';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './src/app';
import html from './src/html';
import { ServerStyleSheet } from 'styled-components';
// const express = require('express');
// const React = require('react');
// const {renderToString} = require('react-dom/server');
// const App = require('./src/app');
// const html = require('./src/html');
// const {ServerStyleSheet} = require('styled-components');

const port = process.env.PORT || 3000;
const app = express();

const ENVIRONMENT = process.env.NODE_ENV;

const staticServe = ENVIRONMENT === 'production' ? express.static("build") : express.static("dist"); 

app.use(staticServe);

app.get('**', (req, res) => {
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<App />));
    const styles = sheet.getStyleTags();
    const title = 'react ssr';
    res.send(
        html({
            body,
            styles,
            title,
        })
    );
});

//for firebase functions - hosting
// export let ssrapp = functions.https.onRequest(app);

app.listen(port, () => console.log('server is listening'));
