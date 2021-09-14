const Cliente = require('../models/clientes');
module.exports = app => {


app.get('/clientes', (req, res) => {
    res.send('salve')
})


app.post('/clientes', (req, res) => {
    const cliente = req.body

    Cliente.add(cliente)
})


}