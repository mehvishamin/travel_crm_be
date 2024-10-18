const Client = require("../models/mongoose");

const addClients = async (req, res) => {
    try {
        const clientData = req.body;
        const clientModal = new Client(clientData);
        const savedClient = await clientModal.save();
        res.status(200).send(savedClient);
    } catch (error) {
        res.status(500).send(`Error creating client: ${error.message}`);
    }
};



async function getAllClients(req, res) {
    try {

        const response = await Client.find();
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(`Error fetching clients: ${error.message}`);
    }
}

const updateClients = (req, res) => {
    const { clients } = req.body
    const { id } = req.params
    res.send(
        {
            data: clients,
            message: `this ${id} is Updated succesfully`

        })
}
const deleteClients = (req, res) => {
    const { id } = req.params
    res.send(`This ${id} is deleted successfully`)
}

module.exports = { getAllClients, addClients, updateClients, deleteClients }
