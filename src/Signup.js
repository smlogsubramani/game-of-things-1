import React from 'react'
import './App.css';
import image1 from './Images/signup.jpeg'


 const Signup = () => {
  return (
    <div>
        <div class="container">
            <div class="row">
                
              <div class="col-md-6">
                    <div class="space">
                        <h2 class="heading">SIGNUP</h2>
                    </div>

                    <div class="row">
                        <div class="space1"></div>                    
                        <div class = "col-md-4">
                        <h2 class="sub-heading">FIRST NAME</h2>  
                        </div>
                        <div class="col-md-6">                     
                        <input class="input1" type={'text'} placeholder="First name" size="30"/>
                        </div>
                   
                    </div>
                    <div class="space1"> </div>
                    <div class = "row">
                        <div class="col-md-4">
                        <h2 class="sub-heading">LAST NAME</h2> 
                        </div>
                        <div class="col-md-6">                      
                        <input class="input1" type={'text'} placeholder="Lastname" size="30" />
                        </div>
                        </div>
                    <div class="space1"></div>
                    <div class="row">
                        <div class="col-md-4">
                        <h2 class="sub-heading">EMAIL</h2> 
                        </div>     
                        <div class="col-md-6">                 
                        <input class="input1" type={'email'} placeholder="EmailID" size="30" />
                        </div> 
                        </div> 
                    
                    <div class="space1"></div>
                    <div class="row">
                        <div class="col-md-4">
                        <h2 class="sub-heading">PASSWORD</h2> 
                        </div>   
                        <div class="col-md-6">
                                                
                        <input class="input1" type={'password'} placeholder=" Password" size="30" />
                        </div>
                        </div>  
                    
                    <div class="space1"> </div>
                    <div class="row">
                        <div class="col-md-4">
                        <h2 class="sub-heading">Re-enter password</h2> 
                        </div>
                        <div class="col-md-6">                                           
                        <input class="input1" type={'Password'} placeholder="re-enter password" size="30" />
                        </div>    
                        </div> 
                   
                    <div class="space1"></div>
                    <div class="signup">
                        <button class="boton1">Create account</button>
                    </div>
                    <div class="space1">
                    <label class="subscript1">
                        Already have an account?<a href="Login.js">Login</a>
                    </label>
                    </div>
              </div>
              <div class="col-md-6">
              <img class="image1" src={image1} />
                
                </div>
              
            </div>
        </div>
    </div>
  )
}
export default Signup
