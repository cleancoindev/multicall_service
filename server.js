'use strict';

const express = require('express');
const multicall = require('@makerdao/multicall')
const bodyParser = require('body-parser');
const {getConfig} = require('./multicall_config');

// express vars
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
// multicall vars
const NETWORK = process.env.NETWORK || "ropsten"
const multicallConfig = getConfig(NETWORK);

// App
const app = express();
app.use(bodyParser.json());

app.get('/multicall', async (req, res, next) => {
  console.log("Requested: ", req.body);
  try {
    const response = await multicall.aggregate(req.body, multicallConfig)
    console.log("Response: ", response.results);
    res.json(response.results);
  } catch (e) {
    next(e)
  }
});

app.listen(PORT, HOST);
console.log(`Running ${NETWORK} on http://${HOST}:${PORT}`);
