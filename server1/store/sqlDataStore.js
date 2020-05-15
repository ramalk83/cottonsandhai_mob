const mscf = require('./mySQLConnectionFactory');

exports.getStates = function() {
  console.log("################### Entered SQLDataStore ################################");
  var states = [];
  var SQL = "SELECT * FROM cs_new.state where code = ?";

  return new Promise(function(resolve, reject) {
    var con = mscf.getSQLConnection();
    con.query(SQL, 'tn', function (err, result, fields) {
      console.log("################### Entered SQL ################################");
      if(err) {
        console.error('Error:- ' + err.stack);
        reject(new Error('Ooops, something broke!'));
      } else {
        console.log(result);
        Object.keys(result).forEach(function(key) {
          var row = result[key];
          var state = {};
          state['code'] = row.code;
          state['state'] = row.state;

          states.push(state);
          console.log(states);
        });
        console.log("################### Exited SQLDataStore ################################");
        resolve(states)
      }
    });
 });
};

exports.createState = function(state) {
  console.log("################### Entered SQLDataStore ################################");
  let SQL = "INSERT into cs_new.state (code, state) values ('kl', 'Kerala')";
  let DATA = ['kl', 'Kerala'];

  return new Promise(function(resolve, reject) {
    var con = mscf.getSQLConnection();
    con.query(SQL, function (err, result, fields) {
      console.log("################### Entered SQL ################################");
      if(err) {
        console.error('Error:- ' + err.stack);
        reject(new Error('There is an error'));
      } else {
        console.log(result.affectedRows);
        console.log("################### Exited SQLDataStore ################################");
        resolve(true)
      }
    });
 });
};











// For transaction related - if needed we can modify below


// connection.beginTransaction(function(err) {
//   if (err) { throw err; }
//   connection.query('INSERT INTO posts SET title=?', title, function (error, results, fields) {
//     if (error) {
//       return connection.rollback(function() {
//         throw error;
//       });
//     }
//
//     var log = 'Post ' + results.insertId + ' added';
//
//     connection.query('INSERT INTO log SET data=?', log, function (error, results, fields) {
//       if (error) {
//         return connection.rollback(function() {
//           throw error;
//         });
//       }
//       connection.commit(function(err) {
//         if (err) {
//           return connection.rollback(function() {
//             throw err;
//           });
//         }
//         console.log('success!');
//       });
//     });
//   });
// });
