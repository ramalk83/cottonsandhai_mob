const mySQLPort = 3001;
const mySQLHost = "localhost";
const mySQLUser = "root";
const mySQLPassword = "password@123";
const mySQLSchema = "cs_new";

var mySQL = require('mySQL');

var con = mySQL.createConnection({
  host: mySQLHost,
  user: mySQLUser,
  password: mySQLPassword
});

var pool  = mySQL.createPool({
	host: mySQLHost,
  user: mySQLUser,
  password: mySQLPassword,
  database : mySQLSchema
});

exports.getSQLConnection = function (err) {
  //con.connect();
	con.connect(function(err) {
	    if(err) {
	        console.error('Error:- ' + err.stack);
	        return;
	    }

	    console.log('MySQL Connected Id: ' + con.threadId);
	});
	return con;
};

/*

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

exports.mySQLCon = con
exports.mySQLPool = pool;


*/

//module.exports = getConnection;
//module.exports = getSQLConnection;
