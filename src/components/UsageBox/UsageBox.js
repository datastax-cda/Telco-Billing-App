import "./usagebox.css"
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import UsageCharts from "../../charts/UsageChart";

export default function UsageBox() {
  return (
    <div>
      <div className="home">
        <FeaturedInfo />
        <UsageCharts />
      </div>
    </div>
  )
}
