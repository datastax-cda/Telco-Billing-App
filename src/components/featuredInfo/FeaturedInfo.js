import "./featuredInfo.css"
import { ArrowUpward } from '@material-ui/icons'
import axios from "axios"
import { useState,useEffect } from "react"

import React from 'react'

export default function FeaturedInfo() {

  const [monthlyUsage,setmonthlyUsage] = useState(null)
  

  const fetchMonthlyUsage = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getMonthlyData${account}`)
    setmonthlyUsage(Object.values(results)[0][0].datausage)
  }

  useEffect(() => {
    fetchMonthlyUsage()
  }, [])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Data (Week)</span>
          <div className="featuredConsumtionContainer">
            <span className="featuredConsumption">240GB</span>
            <span className="featuredConsumptionRate">
             +11.4 <ArrowUpward className="featuredIcon"/>
           </span>
         </div>
        <span className="featuredSubtitle"> Compared to Last Week</span>
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
      <div className="featuredItem">
        <span className="featuredTitle">Data (Year)</span>
          <div className="featuredConsumtionContainer">
            <span className="featuredConsumption">758GB</span>
            <span className="featuredConsumptionRate">
             +120 <ArrowUpward className="featuredIcon"/>
           </span>
         </div>
        <span className="featuredSubtitle">Compared to Last Year</span>
      </div>
    </div>
  )
}
