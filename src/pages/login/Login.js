import { useHistory } from 'react-router-dom'
import axios from "axios"
import { useState } from "react"
import './login.css'

export default function Login() {
  let history = useHistory()
  const [username,setusername] = useState(null)
  
  const eventhandler = async () => {
    const results = await axios.get(`/.netlify/functions/getAuth?username=${username}`)
    const account = Object.values(results)[0]
    console.log(account)
    if (account != null) {
      history.push(`/home?account=${account}`)
    }
    }
  
  return (
    <div className="base">
    <div className="base-container">
      <h1 className='title'>Flite 5G Login</h1>
      <div className="login">
        <div className="content">
          <div className="form">
            <div className="fromGroup">
              <input className="input" type="text" name="sername" placeholder="Username" onChange={e => setusername(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button 
            onClick={ () => { eventhandler()}} className="btn">
            Login
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
