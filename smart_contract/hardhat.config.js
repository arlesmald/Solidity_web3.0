// https://eth-goerli.alchemyapi.io/v2/xoXnfZ6AEc6wJh50yuzWgoW-w4cgZQQS

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerly: {
      url: 'https://eth-goerli.alchemyapi.io/v2/xoXnfZ6AEc6wJh50yuzWgoW-w4cgZQQS',
      accounts: ['ee6af3d0fd5411b6a926c848853f9ece2ed4e3ceba0bffbff2f759cd79fccd94']
    }
  }
}