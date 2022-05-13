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

const log_in = () => {
  if (inputs[0].value === 'admin' && inputs[1].value === '12345') {
    console.log('logged in')
  } else {
    alert('Wrong username or password!');
  }
}

const Welcome = () => {
  return (
    <>
    <div className="note">
      <p>
        Username: <span>admin</span>
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
            <label htmlFor="username" className=''>Username</label>
            <input type="text" id='username' required />
          </div>

          <div className="option">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' required />
          </div>
          <button type='submit' onClick={log_in}>Log in</button>

        </div>
      </div>
    </>

  )
}

export default Welcome;