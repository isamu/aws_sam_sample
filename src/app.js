const lambdaRouter = require ("lambda-router20");

const testController = require ("controllers/test")
const sessionController = require ("controllers/session")
const userController = require ("controllers/user")

lambdaRouter.session.setSessionSecret("SET_SECRET_HERE");

lambdaRouter.setInit((event, context) => {
  // some init function
});

const validSession = (sess) => {
  return (sess.valid && sess.data && sess.data.status === "ok");
}

lambdaRouter.setGetUser(async (sess, options) => {
  return validSession(sess) ? {id: 1, username: "test_user"} : null;
});

lambdaRouter.setRoutes([
  {method: "GET", path: "test", func: testController.test},
  {method: "POST", path: "hello/:message", func: testController.hello }, 
  {method: "GET", path: "test/setSession", func: sessionController.setSession},
  {method: "GET", path: "test/getSession", func: sessionController.getSession},
  {method: "GET", path: "test/userAuth", func: userController.getUser, options: {authentication: lambdaRouter.auth.required}},
  {method: "GET", path: "test/getUser", func: userController.getUser, options: {authentication: lambdaRouter.auth.getUser}},
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

