import './billingchart.css'
import { Pie,PieChart,Cell, XAxis,LabelList, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar } from 'recharts';
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

  const data = [
    { name: 'Used', value: 200 },
    { name: 'Balance', value: 300 },
  ];
  const COLORS = ['#0088FE', '#00C49F'];

  const data1 = [
    { name: 'Used', value: 600 },
    { name: 'Balance', value: 400 },
  ];
  const COLORS1 = [ '#FFBB28', '#FF8042'];

  useEffect(() => {
    fetchMonthlyData()
    fetchDailyData()
  }, [])
  return (
    <div className="chart">
      <div className="chartBox">
        <h4 className="chartTitle">Monthly Data Balance</h4>
        <ResponsiveContainer width="100%" aspect={6/1}>
          <PieChart>
            <Pie
              data={data}
              cx={420}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={140}
              outerRadius={200}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer> 
      </div>
      <div className="chartBox">
        <h4 className="chartTitle">Subscription Balance</h4>
        <ResponsiveContainer width="100%" aspect={6/1}>
          <PieChart>
            <Pie
              data={data1}
              cx={420}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={140}
              outerRadius={200}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer> 
      </div>
      </div>
  )
}
