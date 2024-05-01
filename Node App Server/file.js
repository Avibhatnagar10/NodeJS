const http = require('http');
const fs = require('fs');

function Exists(file) {
    return fs.existsSync('./path.txt');
}

function ReadFile(file) {
    try {
        return fs.readFileSync(file, 'utf8');
    } catch (error) {
        return 'Error reading file: ' + error.message;
    }
}

function CreateFile(file) {
    const currentDate = new Date().toDateString();
    try {
        fs.writeFileSync(file, 'File created on ' + currentDate);
        return 'File created successfully.';
    } catch (error) {
        return 'Error creating file: ' + error.message;
    }
}

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const fileName = req.url.replace('/', '') + '.html';
    const fileWithPath = __dirname + '/' + fileName;

    if (Exists(fileWithPath)) {
        res.write('File already exists and contents are:')
        const content = ReadFile('./path.txt');
        res.write(content);
    } else {
        res.write('File does not exist but created successfully.')
        const output = CreateFile('./path.txt');
    }

    res.end();
}).listen(8080);
