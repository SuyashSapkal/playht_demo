import { useRecoilState } from 'recoil';
import './SignInCard.css';
import {userStateAtom} from '../App'
import { useState } from 'react';
import img from '../assets/wave.jpg'

export default function(){
    const [userName, setUserName]=useRecoilState(userStateAtom);
    const [textValue, setTextValue] = useState("");

    return(
        <div className="card" id="signin">
            <img className='wave' src={img} />
            <div>
                {((userName !== "") && (userName !== "Sign in")) && <div className="h2">
                    Entered as a guest user {userName} 
                    </div>
                }
                <div className="h2">Enter as a guest User</div>
                <div id="signininput">
                    <div className="inputText" id="username">
                        Username
                    </div>
                    <input className="inputbox" type="text" placeholder="Username" onChange={(event)=>{
                        setTextValue(event.target.value)
                        // value = {textValue}
                    }} />
                </div>
                <button className="bttn" id="submit_button" onClick={() => {setUserName(textValue)}}>Submit</button>
            </div>
        </div>
    )
}