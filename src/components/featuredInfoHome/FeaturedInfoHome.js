import "./featuredinfohome.css"
import { ArrowUpward } from '@material-ui/icons'
import axios from "axios"
import { useState,useEffect } from "react"
import BillingInfo from "../billInfo/BillingInfo"

import React from 'react'

export default function FeaturedInfoHome() {

  const [monthlyUsage,setmonthlyUsage] = useState(null)
  const [dailyUsage,setdailyUsage] = useState(null)
  

  const fetchMonthlyUsage = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getMonthlyData${account}`)
    setmonthlyUsage(Object.values(results)[0][0].datausage)
  }

  const fetchDailyUsage = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getDailyData${account}`)
    setdailyUsage(Object.values(results)[0][0].datausage)
  }

  useEffect(() => {
    fetchDailyUsage()
    fetchMonthlyUsage()
  }, [])

  return (
    <div className="featured">
      <BillingInfo />
      <div className="featuredItem">
        <span className="featuredTitle">Data (Today)</span>
          <div className="featuredConsumtionContainer">
            <span className="featuredConsumption">{dailyUsage}GB</span>
            <span className="featuredConsumptionRate">
             +4 <ArrowUpward className="featuredIcon"/>
           </span>
         </div>
        <span className="featuredSubtitle">Compared to Yesterday</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Data (Month)</span>
          <div className="featuredConsumtionContainer">
            <span className="featuredConsumption">{monthlyUsage}GB</span>
            <span className="featuredConsumptionRate">
             +56 <ArrowUpward className="featuredIcon"/>
           </span>
         </div>
        <span className="featuredSubtitle">Compared to Last Month</span>
      </div>
    </div>
  )
}
