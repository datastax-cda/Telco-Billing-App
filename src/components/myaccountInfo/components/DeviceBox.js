import "./accountInfoBox.css"
import axios from "axios"
import { useState,useEffect } from "react"

const AccountInfoBox = () => {

  
  const [deviceImage,setdeviceImage] = useState(null)
  const [device,setDevice] = useState(null)
  const [myBasePlan,setmyBasePlan] = useState(null)
  const [emmi,setEMMI] = useState(null)

  const fetchData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getAccountData${account}`)
    //const services = Object.values(results)[0]['services']
    //console.log(Object.values(results)[0]['services'].plan.phoneNumber)
    setmyBasePlan(Object.values(results)[0]['services'].plan.service)
    setdeviceImage(Object.values(results)[0]['services'].plan.deviceImage)
    setDevice(Object.values(results)[0]['services'].plan.deviceName)
    setEMMI(Object.values(results)[0]['services'].plan.emmi)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
      <div className="featuredAccountItem">
          <div className="left">
            <h4>Plan : <span className="accountSubtitle">{myBasePlan}</span></h4>
            <h4> Online Device : <span className="accountSubtitle">{device} ({emmi})</span></h4>
          </div>
          <div className="right">
            <img src={deviceImage} alt="" className="productImage"/>
         </div>
      </div>
  )
}

export default AccountInfoBox