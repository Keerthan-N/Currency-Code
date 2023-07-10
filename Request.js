const http = require('https');

const req = http.request('https://www.google.com/',(res)=>{
    res.on('data',(chunck) =>{
        console.log(`Got the chunck ${chunck}`);
    });
    res.on('end',()=>{
        console.log('No data found further more');
    })
});

req.end();
