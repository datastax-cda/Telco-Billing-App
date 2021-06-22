import './usagecharts.css'
import { Area,AreaChart, XAxis,LabelList, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar } from 'recharts';
import axios from "axios"
import { useState,useEffect } from "react"

export default function UsageCharts() {
  const [monthlyChart,setmonthlyChart] = useState(null)
  const [dailyChart,setdailyChart] = useState(null)

  const fetchMonthlyData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getMonthlyData${account}`)
    setmonthlyChart(Object.values(results)[0])
  }

  const fetchDailyData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getDailyData${account}`)
    setdailyChart(Object.values(results)[0])
  }

  useEffect(() => {
    fetchMonthlyData()
    fetchDailyData()
  }, [])
  return (
    <div className="chart">
      <div className="chartBox">
        <h3 className="chartTitle">Daily Data Usage</h3>
        <ResponsiveContainer width="100%" aspect={2/1}>
          <AreaChart data={dailyChart}>
            <XAxis dataKey="day" stroke="midnightblue" />
            <Area type="monotone" dataKey="datausage" stroke="#fc846a" fill="#fc846a" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="1 3"/>
            <Legend />
          </AreaChart>
        </ResponsiveContainer> 
      </div>
        <div className="chartBox">
        <h3 className="chartTitle">Month-on-Month Analysis</h3>
        <ResponsiveContainer width="100%" aspect={2/1}>
          <BarChart width={150} height={40} data={monthlyChart}>
            <Bar dataKey="datausage" fill="#8884d8">
              <LabelList dataKey="datausage" position="top" />
            </Bar>
            <XAxis dataKey="month_name" stroke="midnightblue" />
            <Tooltip />
            <Legend />
        </BarChart>
        </ResponsiveContainer> 
      </div>
      </div>
  )
}
