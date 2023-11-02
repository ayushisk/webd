const http = require('http');

const { createfunc, readfunc, updatefunc, deletefunc} = require('./newmodule.js');

const server = http.createServer(function(req, res){
    console.log(req.method, req.url);
    if(req.uel == '/create' && req.method == 'POST'){
        res.write(JSON.stringify(createfunc(10)))
    }else if(req.url == '/read' && req.method == 'GET'){
        res.write(JSON.stringify(readfunc()))
    }else if(req.url == '/update'){
        res.write(JSON.stringify(updatefunc(0, 100)))
    }else if(req.url == '/delete'){
        res.write(JSON.stringify(deletefunc(0)))
    }

    res.end();


    /*if(req.url == "/"){
        res.write("Request looks good");
    }else if(req.url == '/pizza'){
        res.write("Pizza is ready!");
    }else{
            res.write("Resuest not support")
    }
    res.end();*/
})

server.listen(5000, function(){
    console.log("Server running on port 5000")
});
    
