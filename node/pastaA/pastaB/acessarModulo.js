const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao)

const c = require('./pasteC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res)=>{
    res.write('bom dia!!!')
    res.end()
}).listen(8080)