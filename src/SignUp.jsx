import React from 'react'
import './signup-style.css'

const formControl = {
    height: '50px',
    width: '360px',
    borderRadius: '5px',
    background: '#E3E3E3'
}
const btn={
    position: 'absolute',
    background: '#F9AB21',
    borderRadius: '8px',
    color: '#f4f4f4'
}
const priFont = {
    fontFamily: "'Roboto', sans-serif"
}
 function SignUp() {
    return (
            
                <div className="row sign-up-main">
                    <div className="sign-up-hero ">
                        <div className="content container">
                            <h2>Explore comics you won’t see anywhere else</h2>
                            <small>Enter your personal details to start your journey with us.</small>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-6">

                <form action="" className="signup-form">
                     <div>
                        <h1 className="text-center" style={priFont}>Sign Up</h1>
                      </div>
                      <div className="form-group">
                          <label htmlFor="firstname">Firstname</label>
                          <input type="text" className="form-control" placeholder="Enter Firstname" style={formControl}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="firstname">Lastname</label>
                          <input type="text" className="form-control" placeholder="Enter Firstname" style={formControl}/>
                      </div>

                        
                          <div className="form-group">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" placeholder="Email" style={formControl}/>
                          </div>
                        
                        
                            <div className="form-group">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" className="form-control" placeholder="Password" style={formControl}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputPassword4">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm Password" style={formControl}/>
                            </div>               
                        
                        
                          <div className="form-group">
                        
                              <div className="form-check form-check-inline">
                                  
                                      <div className="col-md-12">
                                        <input className="form-check-input" type="radio" name="gender"/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">Accept Terms and Conditons</label>
                                      </div>
                                      <div className="col-md-12">
                                        <button type="submit" className="btn" style={btn}>Sign In</button>
                                      </div>
                                
                               
                              </div>
                              
                          </div>
                        
                    
                    </form>
                    </div>
                </div>
    )
}


export default SignUp;