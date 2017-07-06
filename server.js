const net = require('net');
const fs = require('fs');

const server = net.createServer( (c) => {

  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
} );

server.on('error', (err) => {
  throw err;
});

server.listen(6969, () => {
  console.log('server bound');
});

console.log(server.address());