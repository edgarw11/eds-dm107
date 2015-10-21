var http = require('http');
var sql = require('msnodesql');
var http = require('http');
var fs = require('fs');
var useTrustedConnection = false;
var conn_str = "Driver={SQL Server Native Client 10.0};tcp:eds-dm106-exemplo3a-db.database.windows.net,1433;" + 
(useTrustedConnection == true ? "Trusted_Connection={Yes};" : "UID=dm106@eds-dm106-exemplo3a-db;PWD=masterkey1;") + 
"Database={logisticdb};"
sql.open(conn_str, function (err, conn) {
    if (err) {
        console.log("Error opening the connection!");
        return;
    }
    else
        console.log("Successfuly connected");
}); 