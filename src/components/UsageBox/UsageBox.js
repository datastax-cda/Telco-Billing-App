import "./usagebox.css"
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import UsageCharts from "../../charts/UsageChart";
import MapBox from "../mapbox/MapBox";

export default function UsageBox() {
  return (
    <div>
      <div className="home">
        <FeaturedInfo />
        <UsageCharts />
        {/*<MapBox />*/}
      </div>
    </div>
  )
}
