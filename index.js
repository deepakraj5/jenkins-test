const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({ message: 'ok'})
})

app.listen(3000, () => {
    console.log('server upon running in 3000')
})