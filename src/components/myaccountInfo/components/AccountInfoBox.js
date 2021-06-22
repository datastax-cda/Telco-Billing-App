import "./accountInfoBox.css"
import axios from "axios"
import { useState,useEffect } from "react"

const AccountInfoBox = () => {

  const [accountNo,setAccountNo] = useState(null)
  const [name,setName] = useState(null)
  const [phoneNumber,setphoneNumber] = useState(null)
  
  const fetchData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getAccountData${account}`)
    setAccountNo(Object.values(results)[0]['account#'])
    setName(Object.values(results)[0]['name'])
    //console.log(Object.values(results)[0]['services'].plan.phoneNumber)
    setphoneNumber(Object.values(results)[0]['services'].plan.phoneNumber)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="AccountItem">
        <h3>Account</h3>
        <p className="featuredAccountTitle">Name : <span className="accountSubtitle">{name}</span></p>
        <p className="featuredAccountTitle">A/C # : <span className="accountSubtitle">{accountNo}</span></p>
        <p className="featuredAccountTitle">Phone # : <span className="accountSubtitle">{phoneNumber}</span></p>
      </div>
  )
}

export default AccountInfoBox