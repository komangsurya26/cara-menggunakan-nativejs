const fs = require ('fs')
const http = require ('http')

const requestServer = (req,res)=>{
    const dataHtml = fs.readFileSync('./index.html')
    res.end(dataHtml.toString())

}
const server = http.createServer(requestServer)

const port = 3000

server.listen( port, () => {
    console.log(`Server running at http://localhost:${port}/`)}
    )

