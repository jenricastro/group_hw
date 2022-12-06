import axios from 'axios'
import { useState, useEffect } from 'react'

import Car from './components/Car';
import Add from './components/Add';
import Edit from './components/Edit';

const App = () =>{
  const [cars, setCars] = useState([])

  const getCars =()=>{
    axios.get('http://localhost:3000/cars')
    .then((res)=> setCars(res.data), (err)=> console.log(err))
    .catch((error)=> console.log(error))
  };

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/cars', data)
    .then((response) => {
       console.log(response)
       getCars()
    })
 }

 const handleEdit = (data) => {
   axios.put('http://localhost:3000/cars/' + data._id, data)
   .then((response) => {
      console.log(response)
      getCars()
   })
}

 const handleDelete = (event) => {
    axios.delete('http://localhost:3000/cars/' + event.target.value)
    .then((response) => {
     getCars()
    })
 }

 useEffect(() => {
    getCars()
 }, [])

  return(
   <>
      <div class='container-fluid text-center'>
         <h1 class='mt-3'>Cars</h1>
         <Add handleCreate={handleCreate}/>
         <div class='card-container text-center'>
            {cars.map((cars) => {
               return (
                  <div class='cards'>
                  <Car cars={cars} />
                  <br/>
                  <Edit cars={cars} handleEdit={handleEdit}/>
                  <br/>
                  <button class="btn btn-dark" onClick={handleDelete} value={cars._id}>Delete Car</button>
                  </div>
               )
            })}
         </div>
      </div>
   </>
  )
}

export default App