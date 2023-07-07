import koa from 'koa';
import KoaLogger from 'koa-logger';
import { koaBody } from 'koa-body';
import router from './routes.js';
import cors from '@koa/cors';
import dotenv from 'dotenv';

dotenv.config();

const API_PORT = process.env.API_PORT;
const URL_ORIGIN = process.env.ORIGIN;



// Creamos instancia de koa
const app = new koa();


app.use(KoaLogger());
app.use(koaBody());

const corsOptions ={ origin: URL_ORIGIN, credentials:true, optionSuccessStatus:200 }
app.use(cors(corsOptions)); //previo a añadir el router
// Agregamos el router a la instancia de koa
app.use(router.routes());


app.listen(API_PORT, () => {
    console.log('Server running on port 80');
});