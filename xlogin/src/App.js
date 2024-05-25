import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let [user, setUser] = useState({"name":'', "password":''})
  let [validated, setvalidated] = useState(true)
  let [loggedIn, setloggedIn] = useState(false)
  let handleInputData = (e) => {
    let {name, value} = e.target
    setUser((prevValue) => (
      {...prevValue, [name]:value}
    ))
    console.log(user)
  }
  let formUi = <form onSubmit={validateForm}>
  <label>Username:</label> 
  <input type="text" placeholder="Username" name ="name" value={user.name}  onChange={handleInputData} required/><br/>
  <label>Password: </label>
  <input type="password" name="password" value={user.password} onChange={handleInputData} placeholder="Password"  required/><br/>
  <button type="submit">Submit</button>
</form>
  function validateForm(e){
    e.preventDefault()
    if(user.name === "user" && user.password === "password"){
      setvalidated(true)
      setloggedIn(true)
    }else{
      setvalidated(false)
      setloggedIn(false)
    }
    
  }

 
  return (
    <div>
      <h2> Login Page</h2>
      {loggedIn ? ("Welcome, user") : 
       (validated ? formUi : <div>
        <h4>Invalid username or password</h4>
        {formUi}
       </div>)
      }
      
    </div>
  );
}

export default App;
