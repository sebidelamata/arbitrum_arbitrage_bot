// this will load our environment variables
require('dotenv').config();
const ethers = require("ethers");

// uni/sushiswap ABIs
const UniswapV2Pair = require('./abis/IUniswapV2Pair.json');
const UniswapV2Factory = require('./abis/IUniswapV2Factory.json');