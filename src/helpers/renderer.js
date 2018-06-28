import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  const html = `
  <html lang="en">
    <head><meta charset="utf-8"/></head>
    <body>
      <div id="root">${content}</div>
      <script> 
        console.log('The server bundle')
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;

  return html;
};