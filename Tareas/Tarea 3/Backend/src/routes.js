import Router from 'koa-router';
import suma from './routes/suma.js';
import multiplicacion from './routes/multiplicacion.js';
import division from './routes/division.js';
import resta from './routes/resta.js';

const router = new Router();

router.use('/suma', suma.routes());
router.use('/multiplicacion', multiplicacion.routes());
router.use('/division', division.routes());
router.use('/resta', resta.routes());

export default router;