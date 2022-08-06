module.exports = function createRegisters (connection) {
  return new Promise(function (resolve, reject) {
    let list = [];
   connection.query("SELECT name FROM people", function (err, result, fields) {
    console.log(err, result, fields)

     if (err) {
      reject(err)
    } else {
      result.map(i => list.push(`<li>${i.name}</li>`));
      resolve(list)
    }
   });
  })
}