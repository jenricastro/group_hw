import {useState} from 'react'

const Edit =(props) =>{

    const [cars, setCars] = useState({...props.cars})

    const handleChange = (event) => {
      setCars({...cars, [event.target.name]: event.target.value})
     }
  
     const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(cars)
     }
  
    return(
      <>
        <details className='btn btn-dark'>
          <summary>Edit cars</summary>
          <form onSubmit={handleSubmit}>

            <label htmlFor='name'>Name:</label>
                <input className="form-control" type="text" name="name" onChange={handleChange} value={cars.name}/>

                <label htmlFor='image'>Image:</label>
                <input className="form-control" type="tex" name="image" onChange={handleChange} value={cars.image}/>

                <label htmlFor='model'>Model:</label>
                <input className="form-control" type="text" name="model" onChange={handleChange} value={cars.model}/>

                <label htmlFor='hpower'>Horse Power:</label>
                <input className="form-control" type="text" name="hpower" onChange={handleChange} value={cars.horsePower}/>

                <label htmlFor='year'>Year:</label>
                <input className="form-control" type="number" name="year" onChange={handleChange} value={cars.year}/>

                <input className="form-control" type="hidden" name="inCollection" value="true" onChange={handleChange} />
                <input className='mt-3' type='submit' />
          </form>
        </details>
      </>
    )
}

export default Edit