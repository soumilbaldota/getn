export function printRequest(req, res, next) {
  console.log(req.eventNames());
  let body = '';
  req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
      console.log('Request Body:', body);
  });
    next();
  }


  export function printResponse(req, res, next) {
  const send = res.send;
  res.send = function (body) {
      console.log('Response Body:', body);
      send.call(this, body);
  };
    next();
}