module.exports = app => {


app.get('/clientes', (req, res) => {
    res.send('salve')
})


app.post('/clientes', (req, res) => {
    res.send('salve2')
})


}