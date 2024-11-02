const clients = require("../src/clients/routes");
const hotels = require("../src/hotels/routes");



module.exports = (app) => {
    app.use('/clients', clients)
    app.use('/hotels', hotels)

}