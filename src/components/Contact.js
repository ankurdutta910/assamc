import React from 'react';

function Contact() {
  return (
    <div style={{color: 'white'}}>

<div id="contact" class="container" style={{marginTop: '60px', marginBottom: '55px'}}>
 
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497664.21709517937!2d79.15941651200409!3d12.971743014333738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1627062212509!5m2!1sen!2sin" style={{width: '100%', height: '850',border:'0'}} alt="" allowfullscreen=""/>
 <hr style={{backgroundColor: 'grey'}}/>
  <div class="row">
        
    <div class="col-md-4">
      <h4>Contact Us: </h4><hr style={{backgroundColor: 'grey'}}/>
      <p><span class="glyphicon glyphicon-map-marker"></span>VIT, Vellore</p>
      <p><span class="glyphicon glyphicon-phone"></span>Phone: <span style={{fontSize: '20px',color: 'orange'}}>(+91) 7086952212</span> </p>
      <p><span class="glyphicon glyphicon-envelope"></span>Email:<span style={{fontSize: '20px',color: 'orange'}}> assamesecommunity@gmail.com</span> </p>
    </div>
    <div class="col-md-8">
      <form>
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
      <br/>
     
    
          <button class="btn btn-primary" style={{width: '80px'}} type="submit">Send</button>
 
        </form>
    </div>
  </div>

 

</div>
    </div>
  )
}

export default Contact
