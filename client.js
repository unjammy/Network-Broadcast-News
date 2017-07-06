const net = require('net');

const client = net.connect(6969, "localhost", () => {
  // 'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');
});

client.on('data', (data) => {
  console.log(data.toString());
});

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    client.write(chunk);
  }
});

client.on('close', () => {
  console.log('disconnected from server');
});

console.log(client.address());