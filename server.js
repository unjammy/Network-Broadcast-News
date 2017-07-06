const net = require('net');

process.stdin.setEncoding('utf8');

const server = net.createServer( (client) => {

  client.write('client connected');

  client.on("data", (message) => {
    process.stdout.write( `${client.remotePort}: ${message}`);
  });


  client.on('end', () => {
    console.log('client disconnected');
  });

} );

server.on('error', (err) => {
  throw err;
});

server.listen({host: "localhost", port: 6969}, () => {
  console.log('server bound');
  console.log(server.address());
});



module.exports = server;