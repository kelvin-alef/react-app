module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http")
    }
  }
};
