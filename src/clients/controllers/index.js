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

const updateClients = async (req, res) => {
    try {
        const { id } = req.params;  // Get the client ID from URL parameters
        const updatedData = req.body;  // Get the updated client data from the request body

        // Ensure both `id` and `updatedData` are provided
        if (!id || Object.keys(updatedData).length === 0) {
            return res.status(400).json({ message: "ID and client data are required" });
        }

        // Find client by ID and update with new data
        const updatedClient = await Client.findByIdAndUpdate(id, updatedData, {
            new: true,  // Return the modified document after the update
            runValidators: true  // Run schema validators on the update
        });

        // If the client with the given ID doesn't exist, return a 404 response
        if (!updatedClient) {
            return res.status(404).json({ message: `Client with ID ${id} not found` });
        }

        // Respond with the updated client data
        res.json({
            data: updatedClient,
            message: `Client with ID ${id} updated successfully`
        });
    } catch (error) {
        console.error("Error updating client:", error);
        res.status(500).json({ message: "An error occurred while updating the client" });
    }
};


const deleteClients = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the client by ID
        const deletedClient = await Client.findByIdAndDelete(id);

        // Check if client with given ID exists
        if (!deletedClient) {
            return res.status(404).json({ message: `Client with ID ${id} not found` });
        }

        res.json({ message: `Client with ID ${id} deleted successfully` });
    } catch (error) {
        console.error("Error deleting client:", error);
        res.status(500).json({ message: "An error occurred while deleting the client" });
    }
};


module.exports = { getAllClients, addClients, updateClients, deleteClients }
