import app from './app'
import database from './db';

(async() => {

try {

const port = parseInt(`${process.env.PORT}`);

await database.sync();
console.log(`Executando na porta ${process.env.DB_NAME}`);



await app.listen(port);
console.log(`Executando na porta ${port}`);
  
} catch(error){
    console.log(`${error}`);
}

})();
