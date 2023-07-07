import Router from "koa-router";

const router = new Router();

// Ruta para la operación de division usando ctx.request.body
router.post('/', ctx => {
    const  body = ctx.request.body;
    const numbers = body.numbers;
    console.log(numbers);
    const result = Number(numbers[0]) - Number(numbers[1]);
    console.log(result)
    ctx.body = { result };
    ctx.status = 201;

});
  
export default router;