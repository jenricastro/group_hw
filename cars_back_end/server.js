const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const Car = require('./models/cars.js')

app.use(express.json())
app.use(cors())


app.post('/cars', (req,res) => {
    Car.create(req.body, (err,createdCar) => {
        res.json(createdCar)
    })
})

app.get('/cars', (req,res) => {
    Car.find({}, (err, foundCar) => {
        res.json(foundCar)
    })
})

app.delete('/cars/:id', (req, res) => {
    Car.findByIdAndRemove(req.params.id, (err, deletedCars) => {
        res.json(deletedCars)
    })
})

app.put('/cars/:id', (req,res) => {
    Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCar) => {
        res.json(updatedCar)
    })
})

mongoose.connect('mongodb://localhost:27017/carData')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});


app.listen(3000,() => {
    console.log('listening')
})