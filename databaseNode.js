var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwaszx11",
  database: "blogPostData"
});

con.connect(function(err) {
  if (err) throw err;
});
var readData = function(num){
    con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM BlogPost WHERE postID =" + num, function (err, result) {
    if (err) throw err;
    return result;
  });
});
}
var writeData = function(tile, body){
    con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO blogPost (title, blogBody) VALUES ('"+ tile +"','" + body +"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
  });
});
}
module.exports = readData, writeData;