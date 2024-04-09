import './FeatureContent.css';
import wave2 from '../assets/wave2.jpg'

export default function FeatureContent(){
    return(
        <div className="featureContent">
            <img className='wave2' src={wave2} />
            <div className='feature'>
                <div className='featureText'>
                    <div className="h1">Major Features</div>
                    <div className="featurelist">
                        <p className='list'>Ultra-realistic voice generation</p>
                        <p className='list'>Text to Speech Conversion</p>
                        <p className='list'>Voice Cloning</p>
                        <p className='list'>AI Voice Agents</p>
                        <p className='list'>Supports Multiple Languages and Accents</p>
                    </div>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    )
}