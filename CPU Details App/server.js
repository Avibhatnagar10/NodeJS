var http = require('http');
var os = require('os');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    const cpus = os.cpus();
    res.write('Model is: ' + cpus[0].model);
    res.write('<br/>');
    res.write('Architecture is: ' + os.arch());
    res.write('<br/>');
    res.write('OS Platform is: ' + os.platform());
    res.end();
})

.listen(8080,()=>console.log("Server Started!"));
