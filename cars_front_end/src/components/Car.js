const Car = (props) => {
    return(
    
       <>
          <div className="card">
                <img src={props.cars.image} className="card-img-top" alt="car" />
                <div className="container">
                    <h3 className="card-title">Name:{props.cars.name} </h3>
                    <h5 className="card-text">Year:{props.cars.year} </h5>
                </div>
            </div>
        </>
   
    )
 }
 
 export default Car

 