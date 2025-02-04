
import HeroSection from "./component/heroSec";
import HomeP from "./component/homep-p1";
import Logos from "./component/logos";
import NewArrivals from "./component/newarrival-cards";
import ReviewSec from "./component/reviewSec";
import TopSelling from "./component/topSelling";

export default function Home() {
  return (
    <div>
    <HomeP/>
    <Logos/>
    <NewArrivals/>
    <TopSelling/>
    <HeroSection/>
    <ReviewSec/>
    </div>

  )
}
