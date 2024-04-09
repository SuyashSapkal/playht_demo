import Benefits from "../components/Benefits";
import FeatureContent from "../components/FeatureContent";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";
import Navbar from "../components/Navbar";

export default function MainPage(){
    return (
        <div className="mainpage">
          <Navbar></Navbar>
          <HeroContent></HeroContent>
          <FeatureContent />
          <Benefits />
          <Footer></Footer>
        </div>
      )
}