import "./homebox.css"
import FeaturedInfoHome from "../featuredInfoHome/FeaturedInfoHome";
import MyaccountInfo from "../myaccountInfo/MyaccountInfo";
import Charts from "../../charts/Charts";
import BillingInfo from "../billInfo/BillingInfo";

export default function HomeBox() {
  return (
    <div>
      <div className="home">
        <MyaccountInfo />
        <FeaturedInfoHome />
        <Charts />
      </div>
    </div>
  )
}
