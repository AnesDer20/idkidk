const http = require("http")

const server = http.createServer((req,res)=>{
    res.end('halo')
})
server.listen(4000)