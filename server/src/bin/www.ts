#!/usr/bin/env node

var serverapp = require('../app');
var debug = require('debug')('sample:server');
var http = require('http');

// 環境のポートを取得。なければ3000を使用
var port = normalizePort(process.env.PORT || '3000');
serverapp.set('port', port);

// サーバー作って listen
var server = http.createServer(serverapp);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


/**
 * ポート番号をnumberにする？
 * @param {port番号} val 
 */
function normalizePort(val: any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * サーバーエラーハンドラ
 */
function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * listening eventに対するハンドラ
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
