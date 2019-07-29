var  http  =  require('http');

var server= http.createServer(function(req,res){

console.log(res);
res.write('hello');
res.end();
});

server.listen(9001); 