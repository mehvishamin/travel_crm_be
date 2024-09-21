const express = require("express")
const router = express.Router();
const clientsController = require("./controllers/index")

router.get('/clients', (req, res) => { clientsController.getAllClients(req, res) });
router.post('/save-clients', (req, res) => { clientsController.addClients(req, res) })
router.put('/update-clients/:id', (req, res) => { clientsController.updateClients(req, res) })
router.delete('/delete-clients/:id', (req, res) => { clientsController.deleteClients(req, res) })

module.exports = router