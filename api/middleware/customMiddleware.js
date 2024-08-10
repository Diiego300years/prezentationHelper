/**
 * Middleware that logs each incoming HTTP request to the console along with
 * its method, URL, resulting status code, and the time taken to process and
 * respond to the request. The logging occurs after the response has been sent
 * to the client, ensuring accurate measurement of processing time.
 * 
 * This middleware enhances observability and debugging capabilities by providing
 * insights into the application's traffic patterns and performance characteristics.
 * 
 * @param {express.Request} req - The request object, containing data about the
 *                                incoming HTTP request, such as the method and URL.
 * @param {express.Response} res - The response object, used to hook into the 'finish'
 *                                 event to log when the response has been fully sent.
 * @param {Function} next - A callback to signal that the next middleware in the
 *                          chain should be executed.
 */
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
