import heroImage from "../assets/wave.jpg";
import './HeroContent.css';

export default function HeroContent(){
    return(
        <div className="herocontent">
            <img className="heroimg" src={heroImage} alt="heroimg"/>
            <div className="herotext">PlayHT</div>
            <div className="herosubtitle">Cutting-Edge of <span className="aitext">AI</span> Generated Voice Systems</div>
        </div>
    )
}