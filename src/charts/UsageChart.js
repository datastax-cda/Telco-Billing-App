import './usagecharts.css'
import { Area,AreaChart, XAxis,YAxis,LabelList, CartesianGrid, Tooltip, Line, LineChart, Legend,ResponsiveContainer,BarChart, Bar,LinearGradient } from 'recharts';
import axios from "axios"
import { useState,useEffect } from "react"

export default function UsageCharts() {
  const [monthlyChart,setmonthlyChart] = useState(null)
  const [dailyChart,setdailyChart] = useState(null)
  const [hourlyChart,sethourlyChart] = useState(null)

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

  const fetchHourlyData = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getHourlyData${account}`)
    sethourlyChart(Object.values(results)[0])
  }

  useEffect(() => {
    fetchMonthlyData()
    fetchDailyData()
    fetchHourlyData()
  }, [])
  return (
    <div className="chart">
      <div className="chartBox">
        <h3 className="chartTitle">Hourly 5G Data Usage</h3>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart data={hourlyChart} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0bda51" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0bda51" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="hour" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="datausage" stroke="#71bc78" fillOpacity={1} fill="url(#colorUv)" activeDot={{ r: 8 }} />
        </AreaChart>
        </ResponsiveContainer> 
      </div>
      <div className="chartBox">
        <h3 className="chartTitle">Daily 5G Data Usage</h3>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart data={dailyChart} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="pink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4f00" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ff4f00" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="datausage" stroke="#f08080" fillOpacity={1} fill="url(#pink)" activeDot={{ r: 8 }} />
        </AreaChart>
        </ResponsiveContainer> 
      </div>
      <div className="chartBox">
        <h3 className="chartTitle">Month-on-Month Analysis</h3>
        <ResponsiveContainer width="100%" aspect={2/1}>
          <BarChart width={150} height={40} data={monthlyChart}>
            <Bar dataKey="datausage" fill="#b0e0e6">
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
