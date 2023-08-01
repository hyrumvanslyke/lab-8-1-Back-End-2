const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const controller = require('./controller')
const {getHouses, deleteHouse, createHouse, updateHouse} = controller
app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.listen(4004, () => console.log('having a party on port 4004'))