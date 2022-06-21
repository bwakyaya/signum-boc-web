import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-panel">
        <div className='login-logo'>
          <img src='signum-logo.png' height="100px" width="130px"></img>
        </div>
        <div className='username-section'>
          <input type={'text'} placeholder='Username' className='username-field'></input>
        </div>
        <div className='password-section'>
          <input type={'password'} placeholder='Password' className='password-field'></input>
        </div>
        <div className='button-section'>
          <button className="login-button">Login</button>
        </div>
        <div className='account-options'>
          <a className='sign-up-label' href='https://www.signumadvocates.com/' target="_blank">Sign Up</a>
          <a className='forgot-password-label' href='https://www.signumadvocates.com/' target="_blank">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
