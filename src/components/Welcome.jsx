import { useState } from 'react';
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



const Welcome = () => {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
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
            <i class='bx bx-show' id='show_password' onClick={show_pass}></i>
          </div>
          <button type='submit'>Log in</button>

        </div>
      </div>
    </>

  )
}

export default Welcome;