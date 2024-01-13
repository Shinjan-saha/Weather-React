module.exports = {
    resolve: {
      fallback: {
        "url": resolve.resolve("url/"),
        "assert": require.resolve("assert/"),
        "stream": require.resolve("stream-browserify")
      }
    }
  };
  