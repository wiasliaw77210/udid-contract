require('dotenv').config();
import fs from 'fs';
import path from 'path';
import { usePlugin, BuidlerConfig } from '@nomiclabs/buidler/config';

usePlugin('buidler-ethers-v5');
usePlugin('buidler-deploy');
usePlugin('solidity-coverage');

// read mnemonic
let mnemonic;
try {
  mnemonic = fs
    .readFileSync(path.resolve(process.env.MNEMONIC_PATH || '', '.mnemonic'))
    .toString();
} catch (err) {
  throw err;
}

const Config: BuidlerConfig = {
  // network
  defaultNetwork: 'buidlerevm',

  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_PROJ_ID}`,
      accounts: {mnemonic},
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJ_ID}`,
      accounts: {mnemonic},
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_PROJ_ID}`,
      accounts: {mnemonic},
    },
    coverage: {
      url: 'http://localhost:8545',
    }
  },

  namedAccounts: {
    deployer: 0,
  },

  // solidity compiler
  solc: {
    version: '0.5.8',
  },

  // repo path
  paths: {
    sources: './src',
    tests: './test',
    artifacts: './dist/artifact',
    deploy: './deploy',
    deployments: './deployments'
  },
}

export default Config;
