module.exports = app => {
    const user = require('../controllers/user_controller')
    const debt = require('../controllers/debt_controller')
    const r = require('express').Router()

    r.get("/user", user.findAll)
    r.get("/user/:id", user.findByID)
    r.post("/user", user.create)
    r.put("/user/:id", user.update)
    r.delete("/user/:id", user.delete)

    r.get("/debt", debt.findAll)
    r.get("/debt/:id", debt.findByID)
    r.post("/debt", debt.create)
    r.put("/debt/:id", debt.update)
    r.delete("/debt/:id", debt.delete)

    app.use("/debt-api", r)
}