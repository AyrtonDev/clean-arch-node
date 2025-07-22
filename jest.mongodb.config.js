// jest-mongodb-config.js
module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest',
    },
    binary: {
      version: '6.0.6', // ou a versão desejada do MongoDB
      skipMD5: true,
    },
    autoStart: false,
  },
};