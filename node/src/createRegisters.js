module.exports = function createRegisters (connection) {
  return new Promise(function (resolve, reject) {
    connection.connect(function(err) {
      if (err){
       reject(err);
      } else {
        connection
          .query(`INSERT INTO people (name)  VALUES ('John Due'), ('Mary Due'), ('Steve Due'), ('Paul Due')`);
        resolve();
      }
    });
  })
}