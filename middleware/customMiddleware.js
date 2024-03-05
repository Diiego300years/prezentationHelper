// middleware/customMiddleware.js
function logRequest(req, res, next) {
  const start = Date.now();
  const { method, url } = req;

  // Hook into the response finish event to log when the response is done.
  res.on('finish', () => {
    const duration = Date.now() - start;
    const { statusCode } = res;
    console.log(`${method} ${url} ${statusCode} - ${duration}ms`);
  });

  next();
}


export default logRequest;
