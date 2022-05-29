import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css';


let inputs
document.addEventListener('DOMContentLoaded', () => {
  inputs = document.querySelectorAll('input');
  const labels = document.querySelectorAll('label');
  inputs.forEach(input => {
    input.addEventListener('click', () => {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor === input.id) {
          labels[i].classList.add('active');
        }
   
       
      }
    })
  })
  
})

/* Show password */
const show_pass = () => {
  const show = document.getElementById('show_password');
  const input_field = document.getElementById('password');
  
  if (show.classList.contains('bx-show')) {
    show.classList.remove('bx-show');
    show.classList.add('bx-hide')
    input_field.type = 'text';
  }
  else {
    show.classList.remove('bx-hide');
    show.classList.add('bx-show');
    input_field.type = 'password';
  }
}

/* Validate form */
const validate_form = (email, password) => {
  return email.length > 0 && password.length > 0;
}

const Welcome = () => {
/* Log in */
const log_in = () => {
  if (email == 'abc123@gmail.com') {
    set_log_state(true)
  } else {
    set_log_state(false)
  }
}

  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [log_state, set_log_state] = useState(false);

  if (!log_state) {


  return (
    <>
    <div className="note" draggable>
      <p>
        Email: <span>abc@gmail.com</span>
        <br />
        Password: <span>12345</span>
      </p>
    </div>

      <div className="welcome">
        <div className="title">
          <span>.io</span>
          <p>Bank</p>
        </div>
        <div className='desc'>Your bank of choice!</div>

        <div className="login">
          <p>Login</p>
          <div className="option">
            <label htmlFor="email" className=''>Email</label>
            <input type="email" id='email' required value={email} onChange={ev => set_email(ev.target.value)} />
          </div>

          <div className="option">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' required value={password} onChange={ev => set_password(ev.target.value)} />
            <i className='bx bx-show' id='show_password' onClick={show_pass}></i>
          </div>
          
          <button type='submit' disabled={!validate_form(email, password)} onClick={log_in}>Log in</button>
          
        </div>
      </div>
    </>
  )}
  else {
    console.log('Logged in')
    return (
      <Link to='/dashboard'></Link>
    )
  }

}

export default Welcome;