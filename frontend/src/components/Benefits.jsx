import './Benefits.css';
import wave3 from '../assets/wave3.jpg'

export default function Benefits(){
    return(
        <div className="benefits">
            <img className='wave3' src={wave3} />
                <div className="benefits_h1">Major Features</div>
            <div className="user_benefits">
                <div className='featurelist'>
                    <p className='benefits_list'>AI Content Creation </p>
                        <p className='item_info'>Create and Publish AI content to ITunes, Spotify, Google Podcast, etc.</p>
                    <p className='benefits_list'>Voice Generation API</p>
                        <p className='item_info'>Get access to state of the art Voice Generation API</p>
                    <p className='benefits_list'>Multilingual Speech Synthesis</p>
                        <p className='item_info'>Generate speech in various languages and accents</p>
                    <p className='benefits_list'>Voice Cloning</p>
                        <p className='item_info'>Create High Fidelity Voice clones that are 100% accurate to their human real voices</p>
                    <p className='benefits_list'>Ultra Realistic AI Voices</p>
                        <p className='item_info'>Generate high quality AI speech with realistic voices</p>
                </div>
                <div className='featurelist'>
                    <p className='benefits_list'>AI Pronounciation</p>
                        <p className='item_info'>Generate libray of custom pronounciations to use in the audio sample generation</p>
                    <p className='benefits_list'>PlayHT studio</p>
                        <p className='item_info'>Get access to powerful and feature rich online text to voice studio</p>
                    <p className='benefits_list'>Audio Widgets</p>
                        <p className='item_info'>Plug-and-play fully customisable audio widgets for your website</p>
                    <p className='benefits_list'>Text to Speech Conversionn</p>
                        <p className='item_info'>Convert text to speech with high accuracy</p>
                    <p className='benefits_list'>Multilingual and Accent support</p>
                        <p className='item_info'>Generate audio in multiple languages and accents</p>
                </div>
            </div>
        </div>
    )
}