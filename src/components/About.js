import React from 'react'
import image from '../images/banner1.jpg'

function About() {
  return (
    <div className="aboutus-area" style={{color: 'white', textAlign: 'justify'}}>
    <div className="container" style={{marginTop: '60px'}}>
        <div className="row">
            <div className="col-xs-12">
            
            <div className="col">
                <div className="aboutus-content container">
                <h1>About Us</h1><hr style={{backgroundColor: 'grey'}}/>
                  <img style={{width: '150vh'}} src={image} alt="" className=""/>
                
              
                    <p style={{marginTop: '15px'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has oots in a piece of classNameitin literature from 45 BC, making it over 2000 years old. Richard McClint professor at Hamden dney College irginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature.</p>
                    
               
                    
                </div>
            </div>    
            </div>
        </div>
    </div>
</div>
  )
}

export default About
