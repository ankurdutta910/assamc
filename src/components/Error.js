import React from 'react'
import { useNavigate } from 'react-router-dom';

function Error() {
     let navigate = useNavigate();

  return (
    <div>
     <div className="container" style={{color: 'white', marginBottom: '80px'}}>
    <div className="row">
        <div className="col-md-12">
            <div className="error-template" style={{padding: '40px 15px', textAlign: 'center', marginBottom: '40px', marginTop: '72px'}}>
                <h1>
                    Oops!</h1>
                <h1 style={{fontSize: '6em'}}>
                    404 Not Found</h1>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions" style={{marginTop:'15px',marginBottom:'15px'}}>
                    <button onClick={() =>{
                         navigate("/")
                    }} 
                    style={{marginRight: '10px'}} className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </button>
                        
                        
                    </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Error
