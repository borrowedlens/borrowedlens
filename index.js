import * as functions from 'firebase-functions';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/app';
import html from './src/html';
import { ServerStyleSheet } from 'styled-components';
// const functions = require('firebase-functions');
// const express = require('express');
// const React = require('react');
// const { renderToString } = require('react-dom/server');
// const { ServerStyleSheet } = require('styled-components');
// const App = require('./src/app');
// const html = require('./src/html');

const app = express();

app.use(express.static('src'));

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

export let ssrapp = functions.https.onRequest(app);
