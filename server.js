'use strict';

const express = require('express');
const multicall = require('@makerdao/multicall')
const bodyParser = require('body-parser');
const {configs} = require('./multicall_config');

// express vars
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());

async function req_multicall(query, network_config) {
  const response = await multicall.aggregate(query, network_config);
  return response.results;
};

async function handle_request(req, res, next) {
  var network = req.path.replace(/\//g, "")
  try {
    const response = await req_multicall(req.body, configs[network])
    res.json(response);
  } catch (e) {
    next(e)
  }
};

app.get('/mainnet', handle_request);

app.get('/ropsten', handle_request);

app.get('/kovan', handle_request);

app.get('/rinkeby', handle_request);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)
