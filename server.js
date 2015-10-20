var http = require('http');
var port = process.env.PORT || 1337;
var sql = require('msnodesql');
var fs = require('fs');
var useTrustedConnection = false;
var conn_str = "Driver={SQL Server Native Client 10.0};tcp:eds-dm106-exemplo3a-db.database.windows.net,1433;" + 
(useTrustedConnection == true ? "Trusted_Connection={Yes};" : "UID=dm106@eds-dm106-exemplo3a-db;PWD=masterKey1;") + 
"Database={logisticdb};"

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  /*sql.open(conn_str, function (err, conn) {
    if (err) {
        res.end("Error opening the connection!");
        return;
    }
    else
        res.end("Successfuly connected");
	}); */
  res.end('Hello Edgar! :)\n');
}).listen(port);