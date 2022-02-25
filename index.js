const server = require('./api/server')
const { PORT } = require('./secret')

server.listen(PORT, () => {  
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
