const express = require('express');
const app = express();

app.get('/test/:what', (req, res) => {
  res.json({
    host: req.hostname,
    query: req.query,
    params: req.params
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});