import React from 'react'
import './App.css';
import img from './Images/login.jpeg'


const Login = () => {
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
              <div class="col-md-5">
                    <div class="space">
                        <h2 class="heading">LOGIN</h2>
                    </div>
                    <div class="space1">
                        <h2 class="sub-heading">USERNAME</h2>
                        <div class="space2">
                        <input class="input" type={'email'} placeholder="username/email" size="30"/>
                        </div>
                    </div>
                    <div class="space1">
                        <h2 class="sub-heading">PASSWORD</h2>
                        <div class="space2">
                        <input class="input" type={'password'} placeholder="password" size="30" />
                        </div>
                    </div>
                    <div class="space1"></div>
                    <div class="login">
                        <button class="boton">LOGIN</button>
                    </div>
                    <div class="space1">
                    <label class="subscript">
                        Dont have an account?<a href='./Signup.js'>Signup</a>
                    </label>
                    </div>
              </div>
              <div class="col-md-6">
              <img class="image" src={img} />
                
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Login