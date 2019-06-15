const express = require('express');
const port = 8000;
const app = express();

/**
 * // Create routes here
 * 
 * 
 * app.get('/api/compose/express/app', function (req, res, next) {
 *  // Operation on api call, you can call external functions or write a piece of code
 *  next();
 * });
 * 
 */

app.listen(port, function () {
  console.log('Server is running on ' + port + ' port');
});
