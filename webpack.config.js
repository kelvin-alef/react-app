module.exports = {
  // ...outras configurações...
  resolve: {
    fallback: {
      "http": require.resolve("stream-http")
    }
  }
};
