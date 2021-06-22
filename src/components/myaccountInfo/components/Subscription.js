import "./accountInfoBox.css"
import axios from "axios"
import { useState,useEffect } from "react"

const AccountInfoBox = () => {

  const [mysubscriptionPlan,setmysubscriptionPlan] = useState(null)
  const [deviceImage,setdeviceImage] = useState(null)

  const fetchData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getAccountData${account}`)
    setmysubscriptionPlan(Object.values(results)[0]['services'].subscription.service)
    setdeviceImage(Object.values(results)[0]['services'].subscription.deviceImage)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
      <div className="featuredAccountItem">
          <div className="left">
            <h4>Subscription : <span className="accountSubtitle">{mysubscriptionPlan}</span></h4>
          </div>
          <div className="right">
            <img src={deviceImage} alt="" className="subscriptionImage"/>
         </div>
      </div>
      
  )
}

export default AccountInfoBox