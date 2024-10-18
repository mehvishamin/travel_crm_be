const clients = require("../src/clients/routes");


module.exports = (app) => {
    app.use('/clients', clients)
}