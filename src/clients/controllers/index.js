const getAllClients = (req, res) => {
    res.send("Data Fetched")


}
const addClients = (req, res) => {
    const { clients } = req.body
    res.send(clients)
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
