import './FeatureContent.css';
import wave2 from '../assets/wave2.jpg'

export default function FeatureContent(){
    return(
        <div className="featureContent">
            <img className='wave2' src={wave2} />
            <div className='feature'>
                    <div className="h1">PlayHT Studio</div>
                <div className='featureText'>
                    <div className="featurelist">
                        <p className='list'>Ultra-realistic voice generation</p>
                        <p className='list'>Text to Speech Conversion</p>
                        <p className='list'>Voice Cloning</p>
                        <p className='list'>Generate AI Voice Agents</p>
                        <p className='list'>Supports Multiple Languages and Accents</p>
                    </div>
                    <img className='studio_img' src='https://play.ht/assets/img/feature-image.webp?w=1200&q=75'></img>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    )
}