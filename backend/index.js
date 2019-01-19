const http = require('http');
const app = require('./server');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});
