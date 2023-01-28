const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/api/v1/posts", controllers.api.v1.postController.list);
apiRouter.post("/api/v1/posts", controllers.api.v1.postController.create);
apiRouter.put("/api/v1/posts/:id", controllers.api.v1.postController.update);
apiRouter.get("/api/v1/posts/:id", controllers.api.v1.postController.show);
apiRouter.delete("/api/v1/posts/:id", controllers.api.v1.postController.destroy);

// user 
apiRouter.get("/api/v1/users", controllers.api.v1.userController.list);
apiRouter.post("/api/v1/users", controllers.api.v1.userController.create);
apiRouter.put("/api/v1/users/:id", controllers.api.v1.userController.update);
apiRouter.get("/api/v1/users/:id", controllers.api.v1.userController.show);
apiRouter.delete("/api/v1/users/:id",controllers.api.v1.userController.destroy);
apiRouter.post("/api/v1/users/register", controllers.api.v1.userController.register);
apiRouter.post("/api/v1/users/login", controllers.api.v1.userController.login);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
