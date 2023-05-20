const userController = require("../controllers/user.controller")


module.exports = app => {
    app.post("/api/login/users", userController.create),
    app.get("/api/login/users", userController.getAll),
    app.get("/api/login/users/:id", userController.getOne),
    app.delete("/api/login/users/:id", userController.deleteOne),
    app.put("/api/login/users/:id", userController.updateOne)
}