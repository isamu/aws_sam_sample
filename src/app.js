const lambdaRouter = require ("lambda-router20");

const testController = require ("controllers/test")

lambdaRouter.setInit((event, context) => {
  // some init function
});

lambdaRouter.setRoutes([
  {method: "GET", path: "test", func: testController.test},
  {method: "POST", path: "hello/:message", func: testController.hello }, 
]);

lambdaRouter.setResponseHandlers({
  400: testController.errorHandler(400),
  401: testController.errorHandler(401),
  404: testController.errorHandler(404),
})

lambdaRouter.setErrorCallback((event, error) => {
  console.log(error);
}); 

const router = lambdaRouter.router
  
module.exports = {
  router,
}

