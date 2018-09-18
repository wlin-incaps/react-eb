import * as React from "react";
import Helmet from "react-helmet";
import { Route } from "react-router-dom";

function NotFound({ staticContext }) {
  // will be available only on the server
  if (staticContext) {
    staticContext.status = 404;
  }
  const title = "Page Not Found";
  const meta = [
    { name: "description", content: "A page to say hello asynchronously" },
  ];

  return (
    <div>
      <Helmet title={title} meta={meta} />
      <h1>404 : Not Found</h1>
    </div>
  );
}

export function NotFoundRoute() {
  return (
    <Route component={NotFound} />
  );
}

export default NotFoundRoute;
