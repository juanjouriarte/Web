import Router from "koa-router";

const router = new Router();

// Ruta para la operación de suma
router.get('/:number1/:number2', ctx => {
    const { number1, number2 } = ctx.params;
    console.log(number1, number2);
    const result = Number(number1) + Number(number2);
    console.log(result)
    ctx.body = { result };
    console.log(ctx)
    ctx.status = 201;

  });
  
export default router;