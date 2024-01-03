const React = require('react');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const fs = require('fs');
const { default: App } = require('../src/App');
const { default: AppShell } = require('../src/AppShell');

app.get('/', (req, res) => {
  fs.readFile(path.resolve(__dirname, '../build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('error');
    }

    const html = data.replace(`<div id="root"></div>`, `<div id="root">${ReactDOMServer.renderToString(<AppShell />)}</div>`)
    res.send(html);
  })

});
const target = path.resolve(__dirname, '../build')
// console.log({target})
app.use(express.static(target))
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

