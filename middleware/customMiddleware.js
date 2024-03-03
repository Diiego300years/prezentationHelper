// middleware/customMiddleware.js
function logRequest(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Przekazuje kontrolę do następnego middleware w łańcuchu
}

export default logRequest;
