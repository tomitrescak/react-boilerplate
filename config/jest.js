import i18n from './i18n';

// setup.js
module.exports = async () => {
  // ...
  // Set reference to mongod in order to close the server during teardown.
  // global.__MONGOD__ = mongod;
};
