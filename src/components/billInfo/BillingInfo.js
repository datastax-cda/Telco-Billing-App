import "./billingInfo.css"
import { ArrowUpward } from '@material-ui/icons'
import axios from "axios"
import { useState,useEffect } from "react"

import React from 'react'

export default function BillingInfo() {

  const [bill,setBill] = useState(null)

  const fetchMonthlyUsage = async () => {
    const account = window.location.search
    const ratingGroupObject = await axios.get(`/.netlify/functions/getAccountData${account}`)
    const ratingGroup = Object.values(ratingGroupObject)[0].ratingGroup
    const results = await axios.get(`/.netlify/functions/getBillingData?ratingGroup=${ratingGroup}`)
    setBill(Object.values(results)[0][0].charge)
  }

  useEffect(() => {
    fetchMonthlyUsage()
  }, [])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Current Bill</span>
          <div className="featuredConsumtionContainer">
            <span className="featuredConsumption">${bill}</span>
         </div>
      </div>
    </div>
  )
}
