const http = require('http'); //import http module from npm
const fs = require('fs'); //import file system module from npm allows to read and write files from your local file system
const path = require('path'); // alows you specify the path of your file in local file system

const hostname = 'localhost';
const port = '3000';
// to create server
const server = http.createServer((req,res) => {
    console.log("Request for "+ req.url+"by method "+ req.method);

    if(req.method=='GET'){
        var fileUrl;
        if(req.url=='/') fileUrl= '/index.html'
        else fileUrl= req.url;

        var filePath = path.resolve('./public'+fileUrl); //resolve is use give full path of file
        const fileExt = path.extname(filePath); // extname is the extension
        if(fileExt =='.html'){
            fs.exists(filePath, (exists) =>{
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1> Error 404:'+ fileUrl +'not found</h1></body></html>');

                return;
                }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res); //createReadStream method reads the file from the file path
            })
        }
        else{ // if the file is not html
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1> Error 404:'+fileUrl+'not an html file</h1></body></html>');

                return;
        }
    }
    else{ // if method is not get
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1> Error 404:'+req.method+'not supported</h1></body></html>');

        return;
    }
})
//to start the server
server.listen(port, hostname, ()=> {
    console.log(`Server runnning at http://${hostname}: ${port}`) //`` is used when we want to to print the value of the variable in java Script
                                                                    
})
