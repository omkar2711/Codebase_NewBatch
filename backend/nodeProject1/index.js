// server.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';
import os from 'node:os';


const server = createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/read-file') {
    try {
      const data = await readFile('dummy.txt', 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading file');
    }
    return;
  }

  if (req.method === 'POST' && req.url === '/write-file') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        await writeFile('dummy.txt', body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File written successfully');
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error writing file');
      }
    });
    return;
  }

  if(req.method === 'GET' && req.url === '/get-Jokes') {
    try{
        const data = "random joke";
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);  
    }
    catch(err){
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error fetching joke');
    }
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

//api endpoint is handled inside createServer for GET /read-file

// run with `node server.mjs`

//read dummy.txt file and console log the data
readFile('dummy.txt', 'utf8').then((data) => {
  console.log(data);
});

//write to a file named dummy.txt
writeFile('dummy.txt', 'Hello World from Node.js!').then(() => {
  console.log('File written successfully');
}).catch((err) => {
  console.error('Error writing file:', err);
});


//os module
console.log('Operating System:', os.type());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());