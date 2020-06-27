import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/app';
import html from './client/html';
import { ServerStyleSheet } from 'styled-components';

const port = 3000;
const app = express();

app.use(express.static("dist"));

app.get('/', (req, res) => {
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

app.listen(port);

console.log(`serving at port ${port}`);
