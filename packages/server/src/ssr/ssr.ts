import * as express from "express";
import * as fs from "fs";
import * as _ from "lodash";
import * as path from "path";
import * as React from "react";
import { renderToString } from "react-dom/server";
import * as util from "util";

const existsP = util.promisify(fs.exists);

import { IComponentConfig } from "./component";
import { DOCTYPE, Html } from "./html";

const config = require("../../../../config")(process.env.NODE_ENV);

import "isomorphic-fetch";

function getAssets(res: express.Response) {
  if (process.env.NODE_ENV === "development" && res.locals.webpackStats) {
    const assets = res.locals.webpackStats.toJson().assetsByChunkName;
    return Promise.resolve(assets);
  }

  const assetsPath = path.join(config.PUBLIC_FOLDER, "manifest.json");

  return existsP(assetsPath)
    .then((exists) => {
      let assets = {};
      if (exists) {
        assets = require(assetsPath);
      }

      return Promise.resolve(assets);
    });
}

export function serverSideRender(req: express.Request, res: express.Response, next: express.NextFunction) {
  const { Component, getStore, fetchData } = require("./component");
  const navigator = { userAgent: req.headers["user-agent"] };
  const componentConfig: IComponentConfig = {
    routerContext: {},
    store: getStore(),
    locationUrl: req.url,
  };

  Promise.all(fetchData(req.url, componentConfig.store))
    .then(() => getAssets(res))
    .then((assets) => {
      const template = renderToString(React.createElement(Component, {
        config: componentConfig,
      }));

      if (componentConfig.routerContext.status === 404) {
        res.status(404);
      }

      if (componentConfig.routerContext.url) {
        res.redirect(301, componentConfig.routerContext.url);
        return;
      }

      res.send(
        DOCTYPE + "\n" +
        renderToString(React.createElement(Html, {
          assets,
          content: template,
          publicPath: config.PUBLIC_PATH,
          store: componentConfig.store,
        })),
      );

    })
    .catch((err) => next(err));
}
