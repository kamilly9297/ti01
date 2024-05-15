const http = require('http')
const server = http.createServer((req, res) =>{
  const{url} = req;
   console.log(url)
   if (url === '/') {
    res.end('Ola eu sou o Node.js')
   } else if(url === '/contact'){
    res.end('Pagina de Contrato');
   } else if(url === '/about'){
    res.end('Pagina Sobre o Assunto')
   } else {
    res.writeHead(404)
    res.end('Pagina Encontrada !!!')
   }
});

server.listen(3000, ()=> {
    console.log('Servidor Rodando na Porta 3000');
});