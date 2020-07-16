import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";

import configureStore from "../../client/src/store";
import Routes from "../../client/src/routes/routes";
import initialState from "../../client/src/constants/initialState";

const router = express.Router();

const renderer = (req) => {
  const store = configureStore(initialState);
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
  <!DOCTYPE html>
    <html>
    <head>
        <title>NTU Course</title>
        <meta charset="utf-8">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </head>

    <body>
        <div id="app">${content}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(initialState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        <script src='/bundle.js'></script>
    </body>

    </html>`;
};

router.get("*", (req, res) => {
  const content = renderer(req);
  res.send(content);
});

export default router;
