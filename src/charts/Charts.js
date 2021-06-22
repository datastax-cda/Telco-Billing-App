import './charts.css'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar } from 'recharts';
import axios from "axios"
import { useState,useEffect } from "react"

export default function Charts() {
  const [dailyChart,setdailyChart] = useState(null)

  const account = window.location.search

  const fetchDailyData = async () => {
    const results = await axios.get(`/.netlify/functions/getDailyData${account}`)
    setdailyChart(Object.values(results)[0])
  }

  useEffect(() => {
    fetchDailyData()
  }, [])
  return (
    <div className="chart">
      <div className="chartBox">
        <h3 className="chartTitle">Daily Data Usage</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
          <AreaChart data={dailyChart}>
            <XAxis dataKey="day" stroke="midnightblue" />
            <Area type="monotone" dataKey="datausage" stroke="#fc846a" fill="#fc846a" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="1 1"/>
            <Legend />
          </AreaChart>
        </ResponsiveContainer> 
      </div>
    </div>
  )
}
