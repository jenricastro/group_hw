import { useState } from "react"

const Add= (props) =>{
    const [car, setCar] = useState ({name: '', model:'', year: '', horsePower:'', image:'', make:''})

    const handleChange = (event)=>{
        setCar({...car, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.handleCreate(car)
    }


    return(
        <div class="container">
            <div className="add-container">
            <form onSubmit={handleSubmit} className="form-group mx-auto w-75">
                <label htmlFor='name'>Name:</label>
                <input className="form-control" type="text" name="name" onChange={handleChange}/>

                <label htmlFor='image'>Image:</label>
                <input className="form-control" type="text" name="image" onChange={handleChange}/>

                <label htmlFor='model'>Model:</label>
                <input className="form-control" type="text" name="model" onChange={handleChange} />

                <label htmlFor='hpower'>Horse Power:</label>
                <input className="form-control" type="text" name="hpower" onChange={handleChange} />

                <label htmlFor='year'>Year:</label>
                <input className="form-control" type="number" name="year" onChange={handleChange} />

                <input className="form-control" type="hidden" name="inCollection" value="true" onChange={handleChange} />
                <input className='mt-3 btn btn-dark' type='submit' />
            </form>
            </div>
        </div>
    )
}

export default Add