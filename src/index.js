import * as functions from 'firebase-functions';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/app';
import html from './client/html';
import { ServerStyleSheet } from 'styled-components';

const port = 3000;
const app = express();

const ENVIRONMENT = process.env.NODE_ENV;

const staticServe = ENVIRONMENT === 'production' ? express.static("src") : express.static("dist/src"); 

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
export let ssrapp = functions.https.onRequest(app);

// app.listen(port, () => console.log('server is listening'));
